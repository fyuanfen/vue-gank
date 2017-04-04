<template>
  <div class="day" rel="dom">
    <h1>{{data.title}}</h1>
    <div v-html="data.content"></div>
  </div>

</template>

<script type="text/ecmascript-6">
  import vImg from '../lazyloadimg/lazyimg.vue';
  export default {
    name: 'v-day',
    props: {
      data: {
        type: Object
      }
    },
    data() {
      return {
        content: false
      };
    },
    components: {
      vImg
    },
    mounted() {
      this.clearStyle();
    },
    updated() {
      this.clearStyle();
    },
    methods: {
      clearStyle() {
        this.$nextTick(() => {
          var tags = this.$el.getElementsByTagName('img');
          for (let i = 0; i < tags.length; i++) {
            tags[i].removeAttribute('style');// 清除图片原有格式，使用固定大小
          }

          var iframe = this.$el.getElementsByTagName('iframe')[0]
          iframe.width = this.$el.clientWidth;
          console.log(iframe.width)
        });
      }

    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import './day.styl';

  .day ul img, .day h2, .day p:nth-last-child(2), .day p:nth-last-child(1),
  .day [target=_blank] img, .day embed {
    display: none;
  }
</style>
