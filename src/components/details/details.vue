<template>
  <div v-show="isShow">
    <header class="header">
      <div class="pull-left" @click="hide">
        <span class="iconfont icon-left"></span>
      </div>
      <div class="title">{{detailsData.publishedAt || time | formatDate}}</div>
    </header>
    <transition name="fade">
      <v-day v-if="isShow" :data="detailsData" ref="day"></v-day>
    </transition>
  </div>
</template>
<script>
  import {formatDate} from '../../common/js/date';
  import vDay from '../day/day.vue';
  export default {
    name: 'v-details',
    props: {
      time: {
        type: String
      },
      detailsData: {
        type: Object
      },
      isShow: {
        type: Boolean
      }
    },
    data() {
      return {};
    },
    created() {

    },
    mounted() {
      window.scrollTo(0, 0);
    },
    updated() {
      window.scrollTo(0, 0);
    },

    methods: {
      show() {
        this.$nextTick(() => {
          this.$refs.day.clearStyle();
        });
      },
      hide() {
        this.$emit('hideDetail');
      }
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd');
      }
    },
    components: {
      vDay
    }
  };
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import './details.styl';

</style>
