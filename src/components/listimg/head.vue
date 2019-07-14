<template>
  <div class="list_head">
    <span class="iconfont icon-back">&#xe682;</span>
    <span class="title">景点图片</span>
  </div>
</template>

<script>
export default {
  name: "listHead",
  data () {
    return {}
  }

}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.list_head
  height 0.88rem
  line-height 0.88rem
  width 100%
  overflow hidden
  display block
  position fixed
  z-index 9
  background #ffffff
  border-bottom 1px solid #cccccc
  .icon-back
    padding 0 0.2rem
    color #333
    font-size 0.45rem
    float left
  .title
    font-size 0.3rem
    margin 0 1rem
    text-align center
    display block
    color #333
</style>