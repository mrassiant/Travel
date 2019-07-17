<template>
  <div>
    <div class="index_title">
      周末去哪儿
    </div>
    <div class="week_content">
      <router-link
        tag="div"
        :to="'/detail/' + item.id"
        class="week_item"
        v-for="item in week"
        :key="item.id"
      >
        <img :src="item.img" :alt="item.title" class="week_img" />
        <div class="week_info">
          <div class="week_title">
            {{ item.title }}
          </div>
          <div class="week_desc">
            {{ item.info }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexWeek",
  props: {
    week: {
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
.week_item
  margin-bottom 0rem
  background #fff
  .week_info
    padding 0.2rem
  .week_img
    max-width 100%
  .week_title
    font-size 0.28rem
    padding 0.15rem 0
    letter-spacing 0.015rem
    ellsipsis()
  .week_desc
    font-size 0.25rem
    ellsipsis()
    padding-right 0.5rem
    padding-top 0.1rem
    color #666
</style>
