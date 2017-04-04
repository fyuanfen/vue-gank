<template>
    <div class="menu-list" :class="{'show': show}">
      <div class="menu-header">
        <img class="menu-avatar" src="../../assets/avatar.png">
        <div class="menu-title">Yuriel</div>
      </div>
      <div class="menu-ul">
        <div v-for='(value,menuIndex) in menus' @click="updateHeader(menuIndex)">
          <router-link class="icon-quanbu iconfont item" :to="menuIndex">
            <div class="menu-icon">
              <i class="iconfont " :class="'icon-'+ menuIndex"></i>
            </div>
            <span class="menu-text">{{value}}</span>
            <div class="menu-new" v-show="menuIndex ==='day' && news>0">
              <span>5</span>
            </div>
          </router-link>
        </div>

      </div>
    </div>


</template>

<script>
  import { mapState } from 'vuex';
  export default
    {
      name: 'v-menu',
      props: {
        show: {
          type: Boolean
        }
      },
      data() {
        return {
        };
      },
      computed: {
      ...mapState([
        'menus', 'news'
      ])
      },
      methods: {
        updateHeader(menuIndex) {
          this.$store.commit('UPDATE_TITLE', menuIndex);
           this.$store.commit('UPDATE_MENUSHOW');
           if (menuIndex === 'day') {
              this.$store.commit('UPDATE_NEWS');
           }
        }
      }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import 'menu.styl';

</style>
