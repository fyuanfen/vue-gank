<template>
  <div class="card">
    <div class="desc">{{data.desc}}</div>
    <div class="info">
      <div class="who">{{data.who||'匿名用户'}}</div>
      <div class="time">{{date}}</div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '../../common/js/date.js'
  export default {
    name: 'v-card',
    props: {
      data: {
        type: Object
      }
    },
    computed: {
      imageSrc() {
        var url;
        if (this.data.images) {
          url = this.data.images[0] + '?imageView2/0/w/200';
        }
        return url;
      },
      date() {
        return formatDate(new Date(this.data.publishedAt), 'yyyy-MM-dd');
      }

    },
    mounted() {
//      this.$refs.img.onerror = (() => {
//        var count = 0;
//        return () => {
//          count++;
//          console.log('图片获取失败' + count + '次');
//          if (count > 2) return;
//          setTimeout(() => {
//            this.$refs.img.src = this.imageSrc;
//          }, 1000);
//          console.log('错误');
//        };
//      })();
    },
    methods: {
      formatDate(time) {
        this.data
        return formatDate(date, 'yyyy-MM-dd');
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "card.styl";
</style>
