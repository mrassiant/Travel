<template>
  <div id="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe682;</span>
    </div>
    <div class="header-middle">
      <span class="iconfont icon-search">&#xe68d;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <router-link to="/city" tag="div">
        <div>
          {{ this.city }}<span class="iconfont header-triangle">&#xe612;</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "indexHeader",
  computed: {
    ...mapState(["city"]) //将state 中的数据映射到computed 计算属性中 对应的就是computed中的city为state中的city

    //将state中的city 映射到computed 中 另外命名为currentCity  上面的使用就改成 this.currentCity
    //...mapState({
    //  currentCity: "city"
    // })
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
#header
  background $header_bg
  line-height 0.88rem
  height 0.88rem
  color #fff
  display flex
  .header-left
    width 0.8rem
    text-align center
    float left
    .icon-back
      font-size 0.35rem
  .header-middle
    flex 1
    line-height 0.6rem
    height 0.6rem
    background #ffffff
    border-radius 0.05rem
    margin-top 0.14rem
    color #ccc
    text-align left
    padding-left 0.1rem
    font-size 0.24rem
    .icon-search
      float left
      font-size 0.4rem
  .header-right
    float right
    min-width 1.04rem
    padding-right 0.1rem
    text-align center
    font-size 0.24rem
    padding 0 0.1rem
    cursor pointer
    .header-triangle
      font-size 0.24rem
      margin-left 0.05rem
</style>
