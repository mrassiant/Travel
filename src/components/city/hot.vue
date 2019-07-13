<template>
  <div>
    <div class="city_title">
      热门城市
    </div>
    <div class="city_list">
      <div class="list_item">北京</div>
      <div class="list_item">深圳</div>
      <div class="list_item">天津</div>
      <div class="list_item">上海</div>
      <div class="list_item">长沙</div>
      <div class="list_item">武汉</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.city_title
  city_title()
.city_list
  width 100%
  display block
  background #fff
  overflow hidden
  .list_item
    width 33.333%
    display block
    box-sizing border-box
    float left
    text-align center
    padding 0.2rem 0
    border-bottom 1px solid #cccccc
    border-right 1px solid #cccccc
    &:nth-child(3n)
      border-right none
    &:nth-last-child(1), &:nth-last-child(2), &:nth-last-child(3)
      border-bottom none
</style>