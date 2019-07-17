<template>
  <div>
    <div class="index_title">
      <span class="iconfont">&#xe635;</span>猜你喜欢
    </div>
    <div class="love_box">
      <router-link
        tag="div"
        :to="'/detail/' + item.id"
        class="love_item"
        v-for="item in love"
        :key="item.id"
      >
        <div class="item_left">
          <img class="img" :src="item.img" :alt="item.title" />
        </div>
        <div class="item_right">
          <span class="title">{{ item.title }}</span>
          <div>
            <span class="star">
              <font
                class="iconfont"
                v-for="(star, index) in item.stars"
                :key="index"
                >&#xe632;</font
              >

              {{ item.number }}条评论
            </span>
          </div>
          <span class="price">
            <b class="price_icon">￥</b>
            {{ item.price }}
            <b class="price_start">起</b></span
          >
        </div>
        <div class="item_tips item_blue_bg" v-show="item.tiptype === 1">
          随买随用
        </div>
        <div class="item_tips item_yellow_bg" v-show="item.tiptype === 2">
          可定明日
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "indexLove",
  props: {
    love: {
      type: Array,
      request: true
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.index_title
  recommend_title()
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
        font-size 0.25rem
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
          font-size 0.25rem
          &:last-child
            color #333
</style>
