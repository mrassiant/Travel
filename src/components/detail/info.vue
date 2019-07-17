<template>
  <div id="d_info">
    <div class="infos">
      <div class="left_info">
        5.0 <span>分</span>&nbsp; <span>超赞</span>
      </div>
      <div class="right_info">
        景区简介
      </div>
    </div>
    <div class="address">
      <span class="add">
        北京市朝阳区东四环小武基北路
      </span>
    </div>
  </div>
</template>

<script>
export default {
  "name": "detailInfo",
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
#d_info
  position relative
  top -0.2rem
  border-top-left-radius 0.1rem
  border-top-right-radius 0.1rem
  background #ffffff
  width 100%
  display block
  margin-bottom 0.05rem
  .infos
    width 100%
    display block
    padding 0.2rem 0
    overflow hidden
    .left_info
      float left
      border-right 1px solid #efefef
      color #ff8300
      font-size 0.4rem
      span
        font-size 0.25rem
    .right_info
      float right
    .left_info, .right_info
      width 50%
      box-sizing border-box
      padding 0.1rem 0.2rem
      text-align left
      height 0.45rem
      line-height 0.6em
  .address
    padding 0.2rem 0.2rem
    font-size 0.25rem
    border-top 1px solid #efefef
</style>