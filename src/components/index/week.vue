<template>
  <div>
    <div class="index_title">
      {{ title }}
    </div>
    <div class="week_content">
      <div class="week_item">
        <img src="http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg"
             alt="清远走一遭"
             class="week_img" />
        <div class="week_info">
          <div class="week_title">
            清远周边逛
          </div>
          <div class="week_desc">
            人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？
          </div>
        </div>
      </div>
      <div class="week_item">
        <img src="http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg"
             alt="清远走一遭"
             class="week_img" />
        <div class="week_info">
          <div class="week_title">
            清远周边逛
          </div>
          <div class="week_desc">
            人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？
          </div>
        </div>
      </div>
      <div class="week_item">
        <img src="http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg"
             alt="清远走一遭"
             class="week_img" />
        <div class="week_info">
          <div class="week_title">
            清远周边逛
          </div>
          <div class="week_desc">
            人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexWeek",
  data () {
    return {
      title: "周末去哪儿"
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.index_title
  recommend_title()
.week_item
  margin-bottom 0.1rem
  background #fff
  .week_info
    padding 0.2rem
  .week_img
    max-width 100%
  .week_title
    font-size 0.25rem
    padding 0.15rem 0
    letter-spacing 0.015rem
    ellsipsis()
  .week_desc
    font-size 0.15rem
    ellsipsis()
    padding-right 0.5rem
    color #666
</style>
