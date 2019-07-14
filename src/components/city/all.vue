<template>
  <div>
    <div class="all_item">
      <div class="city_title">
        A
      </div>
      <div class="all_list">
        <div class="list_item">阿坝藏族羌族自治州</div>
        <div class="list_item">阿克苏地区</div>
        <div class="list_item">阿拉尔</div>
        <div class="list_item">阿拉善盟</div>
        <div class="list_item">阿勒泰</div>
        <div class="list_item">阿里</div>
        <div class="list_item">安康</div>
        <div class="list_item">安庆</div>
        <div class="list_item">安顺</div>
      </div>
    </div>
    <div class="all_item">
      <div class="city_title">
        B
      </div>
      <div class="all_list">
        <div class="list_item">巴彦淖尔</div>
        <div class="list_item">巴音郭楞</div>
        <div class="list_item">巴中</div>
        <div class="list_item">白城</div>
        <div class="list_item">白沙</div>
        <div class="list_item">白山</div>
        <div class="list_item">白银</div>
        <div class="list_item">百色</div>
        <div class="list_item">蚌埠</div>
        <div class="list_item">包头</div>
        <div class="list_item">宝鸡</div>
      </div>
    </div>
    <div class="all_item">
      <div class="city_title">
        C
      </div>
      <div class="all_list">
        <div class="list_item">沧州</div>
        <div class="list_item">昌都</div>
        <div class="list_item">昌吉</div>
        <div class="list_item">常德</div>
        <div class="list_item">常州</div>
        <div class="list_item">巢湖</div>
        <div class="list_item">安康</div>
        <div class="list_item">安庆</div>
        <div class="list_item">安顺</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "allCity",
  data () {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.city_title
  city_title()
.all_item
  width 100%
  display block
  .all_list
    width 100%
    display block
    overflow hidden
    background #ffffff
    .list_item
      width 25%
      display block
      float left
      box-sizing border-box
      padding 0.25rem 0
      border-bottom 1px solid #cccccc
      border-right 1px solid #cccccc
      margin-bottom -1px
      text-align center
      font-size 0.22rem
      ellsipsis()
      &:nth-child(4n)
        border-right none
</style>
