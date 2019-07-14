<template>
  <div>
    <div class="list-img">
      <div class="listAll">
        <div class="item">
          <img src="https://imgs.qunarzz.com/sight/p0/1905/e6/e683c8cf5e97ce03a3.img.jpg_350x240_9f062fdc.jpg"
               alt="深圳一日游">
        </div>
        <div class="item">
          <img src="https://imgs.qunarzz.com/sight/p0/1905/71/716ed1ae84b2141ca3.img.jpg_350x240_d9dcff03.jpg"
               alt="极速挑战">
        </div>
        <div class="item">
          <img src="https://imgs.qunarzz.com/sight/p0/1905/ba/ba5e7d1d609e56f6a3.img.jpg_350x240_34bffadd.jpg"
               alt="这就是命">
        </div>
        <div class="item">
          <img src="https://imgs.qunarzz.com/sight/p0/1904/c2/c26e1e4ffe899843a3.water.jpg_350x240_8b8a93ab.jpg"
               alt="世界之窗">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "allImg",
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.list-img
  padding-top 1.08rem
  padding-left 0.1rem
  padding-right 0.1rem
  background #efefef
  .listAll
    width 100%
    display block
    overflow hidden
    .item
      width 50%
      display block
      float left
      padding 0 0.05rem
      box-sizing border-box
      margin-bottom 0.1rem
      img
        width 100%
</style>