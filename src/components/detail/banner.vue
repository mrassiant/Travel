<template>
  <div id="banner">
    <div class="banner-img"
         tag="div">
      <img src="//img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg"
           alt="深圳一日游" />
    </div>
    <div class="banner-info">
      <div class="banner-all-img">
        <span class="iconfont">&#xe610;</span>120
      </div>
      <div class="banner-title">世界之窗(AAAAA景区)</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBanner",
  data () {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
#banner
  position relative
  .banner-img
    width 100%
    img
      width 100%
  .banner-info
    position absolute
    left 0rem
    bottom 0.3rem
    color #ffffff
    width 100%
    display block
    z-index 9
    padding-left 0.3rem
    box-sizing border-box
    .banner-title
      font-size 0.35rem
      width 100%
      display block
      margin-top 0.15rem
    .banner-all-img
      font-size 0.2rem
      background rgba(0, 0, 0, 0.5)
      display inline-block
      padding 0rem 0.25rem
      height 0.35rem
      ling-height 0.35rem
      font-size 0.2rem
      border-radius 0.175rem
      span
        position relative
        top 0.02rem
</style>
