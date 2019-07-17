<template>
  <div id="recommend">
    <div class="recommend_title"><span class="iconfont icon-zhan">&#xe600;</span> 推荐内容</div>
    <div class="recommend_box">
      <div class="recom_item"
           v-for="(item, index) in recommend"
           :key="index">
        <div class="recom_left">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="time">{{ item.time }}</div>
          <div class="tips">
            <span class="zy zy_first"
                  v-show="item.ziying === 1">
              <font class="iconfont icon-zy">&#xe71b;</font>自营
            </span>
            <span class="zy"
                  v-show="item.hpiao === 1">无需换票</span>
            <span class="zy"
                  v-show="item.tjtui === 1">条件退</span>
            <span class="zy"
                  v-show="item.zytui === 1">随时退</span>
          </div>
        </div>
        <div class="recom_right">
          <div class="pric"><span>￥</span>{{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailRecommend",
  props: ["recommend"]
};
</script>

<style lang="stylus" scoped>
#recommend
  background #ffffff
  padding 0.2rem 0.15rem
  .recommend_title
    font-size 0.3rem
    padding-bottom 0.15rem
    border-bottom 1px solid #efefef
    .icon-zhan
      color #FF6E6E
      margin-right 0.1rem
      font-size 0.4rem
  .recommend_box
    width 100%
    overflow hidden
    .recom_item
      width 100%
      overflow hidden
      padding 0.2rem 0
      border-bottom 1px solid #efefef
      &:last-child
        border-bottom none
      .recom_left
        width 100%
        display block
        .title
          font-size 0.3rem
          line-height 1.25
        .time
          font-size 0.22rem
          display block
          margin 0.15rem 0
        .tips
          font-size 0.2rem
          .zy
            color #a5e4ec
            border 1px solid #a5e4ec
            padding 0.02rem 0.05rem
            height 0.3rem
            line-height 0.3rem
            margin-right 0.1rem
            .icon-zy
              position relative
              top 0.05rem
      .recom_right
        width 100%
        display block
        color #ff9800
        font-size 0.5rem
        margin-top 0.15rem
        padding-top 0.15rem
        span
          font-size 0.22rem
</style>
