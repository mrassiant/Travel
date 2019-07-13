<template>
  <div id="header">
    <div class="header_title">
      <span class="iconfont icon-back">&#xe682;</span>
      <span class="title_text">{{ title }}</span>
    </div>
    <div class="header_selec">
      <ul>
        <li class="selected">境内</li>
        <li>境外·港澳台</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "城市选择"
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
#header
  background $header_bg
.header_title
  color #fff
  text-align center
  height 0.65rem
  line-height 0.65rem
  .title_text
    display block
    margin 0 1rem
    font-size 0.35rem
  .icon-back
    float left
    padding 0 0.15rem
    height inherit
    font-size 0.35rem
.header_selec
  text-align center
  color #fff
  padding 0.15rem 0
  li
    border 1px solid #fff
    padding 0.1rem 0
    width 2.5rem
    font-size 0.22rem
    &.selected
      background #ffffff
      color #00bcd4
</style>