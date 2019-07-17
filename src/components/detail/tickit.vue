<template>
  <div id="tickit">
    <div class="title">
      <span class="iconfont icon-zhan">&#xe600;</span> 优惠门票
    </div>
    <div class="tickit_box">
      <div class="tickit_item"
           v-for="(item, index) in tickit"
           :key="index">
        <div :class="[ item.isActive ? item_up_title : item_top_title,
            'item_title']"
             @click="item.isActive = !item.isActive">
          {{ item.title }} <span>￥{{ item.price }}</span>
        </div>
        <div class="item_content"
             v-if="item.isActive">
          <div class="content_item"
               v-for="(cld, index) in item.children"
               :key="index">
            <div class="content_title">{{ cld.title }}</div>
            <div class="content_price"><span>￥</span>{{ cld.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailTickit",
  data () {
    return {
      item_up_title: "item_up_title",
      item_top_title: "item_top_title"
    };
  },
  props: ["tickit"]
};
</script>

<style lang="stylus" scoped>
#tickit
  background #ffffff
  margin-top 0.2rem
  padding-bottom 5rem
  .title
    font-size 0.3rem
    padding-bottom 0.15rem
    border-bottom 1px solid #efefef
    padding 0.2rem
    .icon-zhan
      color #FF6E6E
      margin-right 0.1rem
      font-size 0.4rem
  .tickit_box
    margin-top 0.1rem
    .tickit_item
      border-bottom 1px solid #efefef
      .item_top_title
        background url('~styles/img/top.png') 99.4% center no-repeat
      .item_up_title
        background url('~styles/img/up.png') 99.4% center no-repeat
      .item_title
        font-size 0.275rem
        margin-bottom 0.05rem
        letter-spacing 0.5px
        padding 0.2rem 0.2rem
        padding-right 0.34rem
        background-size 0.25rem auto
        span
          float right
          color #ff9800
          font-size 0.3rem
      .content_item
        display flex
        background #ececec
        width 100%
        padding 0.2rem
        box-sizing border-box
        border-bottom 1px solid #cccccc
        &:last-child
          border-bottom none
        .content_title
          display flex
          flex 1.92
          line-height 1.3
        .content_price
          display flex
          flex 1
          align-items center
          justify-content flex-end
          color #ff9800
          font-size 0.25rem
          padding-right 0.15rem
          span
            font-size 0.175rem
</style>
