<template>
  <div id="header">
    <div class="header_title">
      <router-link tag="span"
                   to="/"
                   class="iconfont icon-back">
        &#xe682;
      </router-link>
      <span class="title_text">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "城市选择"
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
#header
  background $header_bg
  z-index 999
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
</style>
