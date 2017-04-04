<template>
    <div>
    <div v-show="!showDetail" class="welfare-wrapper" v-infinite-scroll="loadMore"
         infinite-scroll-disabled="busy"
         infinite-scroll-distance="10">
      <div class="welfare-center">
        <figure v-show="leftData.length > 0" v-for="data in leftData" @click="selectDetails(data.createdAt)">
          <v-img :imgUrl="data.url"></v-img>
        </figure>
      </div>
      <div class="welfare-center">
        <figure v-show="rightData.length > 0" v-for="data in rightData" @click="selectDetails(data.createdAt)">
          <v-img :imgUrl="data.url"></v-img>
        </figure>
      </div>
    </div>
    <v-details  ref="details" key="detail" :isShow="showDetail" :time="time" :detailsData="detailsData"
               @hideDetail="hideDetail"></v-details>
    </div>

</template>

<script>
  import {objectDate} from '../../common/js/date';
  import vImg from '../lazyloadimg/lazyimg.vue';
  import vDetails from '../details/details.vue';
  export default {
    data() {
      return {
        leftData: [],
        rightData: [],
        busy: false,
        page: 1,
        detailsData: {},
        time: '',
        showDetail: false,
        scrollPosition: 0
      };
    },
    components: {
      vImg,
      vDetails
    },
    created() {
    },
    methods: {
      loadTop() {
        this.$store.commit('UPDATE_LOADING', true);
//        this.page = 4;
        // 调用axios方法
//        console.log('loadtop' + this.page);
        this.$http.get(`https://gank.io/api/data/福利/10/${this.page}`).then((response) => {
          let left = response.data.results.filter((data, i) => {
            return (i + 1) % 2 === 1;
          });
          let right = response.data.results.filter((data, i) => {
            return (i + 1) % 2 !== 1;
          });
          this.leftData = this.leftData.concat(left);
          this.rightData = this.rightData.concat(right);
          this.busy = false;
          // $nextTick() 在dom 重新渲染完后执行
          this.$nextTick(() => {
            this.$store.commit('UPDATE_LOADING', false);
          });
        });
      },
      loadMore() {
        this.busy = true;
        this.loadTop();
        this.page++;
      },
      selectDetails(time) {
        this.time = time;
        this.scrollPosition = Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);// 获得当前位置，切换回来定位到原位置

        this.$store.commit('UPDATE_LOADING', true);
        let object = objectDate(this.time);
        this.$http.get(`http://gank.io/api/history/content/day/${object.Y}/${object.M}/${object.D}`).then((response) => {
          let data = response.data.results;
          this.detailsData = data[0];// 获得详情页面
          this.showDetail = true;

          this.busy = true; // 禁用自动加载
          this.$nextTick(() => {
            this.$store.commit('UPDATE_LOADING', false);
          });
        });
      },
      hideDetail() {
        this.showDetail = false;
        this.busy = false; // 启用自动加载
        this.$nextTick(() => {
          window.scrollTo(0, this.scrollPosition);
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "welfare.styl";
</style>
