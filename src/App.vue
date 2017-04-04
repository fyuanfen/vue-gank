<template>
  <div class="app">
    <v-header></v-header>
    <loading v-if="loadingShow"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
  import vHeader from './components/header/header.vue';
  import loading from './components/loading/loading.vue';
  import { mapState } from 'vuex';
  export default {
    name: 'app',
    components: {
      vHeader,
      loading
    },
    data() {
      return {
        show: false
      };
    },
    computed: {
      ...mapState([
        'loadingShow'
      ])
    },
    methods: {
      isShow() {
        this.show = !this.show;
      }
    }
  };
</script>
<style>

  html, body {
    width: 100%;
  }

  body {
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #ffffff;
  }
  @media screen and (min-width: 680px) {
    body {
      width: 680px;
      position: relative;
      margin: 0 auto;
    }

    .app {
      width: 680px;
    }

  }
  .app {
    padding-top: 50px;
  }
</style>
