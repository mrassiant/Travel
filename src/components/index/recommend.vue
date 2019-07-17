<template>
  <div class="recommend">
    <div class="index-title">本周热门榜单</div>
    <div class="recommend-content">
      <router-link
        tag="div"
        :to="'/detail/' + item.id"
        class="recommend-item"
        v-for="item in hot"
        :key="item.id"
      >
        <div class="item-img">
          <img :src="item.img" :alt="item.title" />
        </div>
        <div class="item-text">{{ item.title }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "indexRecommend",
  props: {
    hot: {
      type: Array,
      request: true
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend
  margin-top 0.2rem
  padding-left 0.2rem
  background #fff
  .index-title
    index_title()
  .recommend-content
    width 100%
    overflow-x scroll
    white-space nowrap
    padding-bottom 0.15rem
    .recommend-item
      width 2rem
      display inline-block
      margin-right 0.15rem
      .item-img
        width 100%
        img
          width 100%
      .item-text
        text-align center
        font-size 0.25rem
        margin-top 0.1rem
        padding 0.05rem 0
        width 100%
        white-sapce nowrap
        overflow hidden
        text-overflow ellipsis
</style>
