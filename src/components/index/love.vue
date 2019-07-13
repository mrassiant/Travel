<template>
  <div>
    <div class="index_title">
      <span class="iconfont">&#xe635;</span>{{title}}
    </div>
    <div class="love_box">
      <div class="love_item">
        <div class="item_left">
          <img class="img"
               src="http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg"
               alt="深圳野生动物园" />
        </div>
        <div class="item_right">
          <span class="title">深圳野生动物园</span>
          <div>
            <span class="star">
              <font class="iconfont">&#xe632;</font>
              <font class="iconfont">&#xe632;</font>
              <font class="iconfont">&#xe632;</font>
              <font class="iconfont">&#xe632;</font>19235条评论
            </span>

          </div>
          <span class="price"><b class="price_icon">￥</b>299.9<b class="price_start">起</b></span>
        </div>
        <div class="item_tips item_blue_bg item_yellow_bg">随买随用</div>
      </div>
      <div class="love_item">
        <div class="item_left">
          <img class="img"
               src="http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg"
               alt="深圳野生动物园" />
        </div>
        <div class="item_right">
          <span class="title">深圳野生动物园</span>
          <div>
            <span class="star">
              <font class="iconfont">&#xe632;</font>19235条评论
            </span>

          </div>
          <span class="price"><b class="price_icon">￥</b>299.9<b class="price_start">起</b></span>
        </div>
        <div class="item_tips item_blue_bg item_yellow_bg">随买随用</div>
      </div>
      <div class="love_item">
        <div class="item_left">
          <img class="img"
               src="http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg"
               alt="深圳野生动物园" />
        </div>
        <div class="item_right">
          <span class="title">深圳野生动物园1</span>
          <div>
            <span class="star">
              <font class="iconfont">&#xe632;</font>19235条评论
            </span>

          </div>
          <span class="price"><b class="price_icon">￥</b>299.9<b class="price_start">起</b></span>
        </div>
        <div class="item_tips item_blue_bg item_yellow_bg">随买随用</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "indexLove",
  data () {
    return {
      title: "猜你喜欢"
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.index_title
  padding-left 0.2rem
  margin-top 0.2rem
  padding-bottom 0.2rem
  padding-top 0.2rem
  background #fff
.love_box
  background #fff
  padding 0.2rem
  .love_item
    width 100%
    display block
    overflow hidden
    margin-bottom 0.15rem
    position relative
    .item_tips
      width 1.1rem
      font-size 0.2rem
      height 0.4rem
      line-height 0.4rem
      position absolute
      left 0
      top 0
      color #fff
      background-size 100%
      padding-left 0.05rem
    .item_blue_bg
      background-image url('@~styles/img/blue_bg.png')
    .item_yellow_bg
      background-image url('@~styles/img/yellow_bg.png')
    .item_left
      width 2rem
      height 2rem
      display block
      float left
      overflow hidden
      .img
        max-width 100%
    .item_right
      overflow hidden
      padding-left 0.2rem
      display block
      .title
        font-size 0.3rem
        margin-top 0.2rem
        display block
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        margin-bottom 0.15rem
      .star
        color #333
        font-size 0.15rem
        .iconfont
          font-size inherit
          color #ffb436
          position relative
          top -0.04rem
          &:last-child
            margin-right 0.3rem
      .price
        font-size 0.4rem
        margin-top 0.2rem
        color #ff8300
        display block
        b
          font-size 0.15rem
          &:last-child
            color #333
</style>
