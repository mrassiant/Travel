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
      <div>深圳<span class="iconfont header-triangle">&#xe612;</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "indexHeader",
  date() {
    return {
      city: "深圳"
    };
  }
};
</script>
<style lang="stylus" scoped>
#header
  background #00bcd4
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
    .header-triangle
      font-size 0.24rem
      margin-left 0.05rem
</style>
