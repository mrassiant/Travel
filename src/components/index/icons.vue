<template>
  <swiper :options="swiperOption"
          class="icons">
    <!-- slides -->

    <swiper-slide v-for="(page, index) in lists"
                  :key="index">
      <div class="icon-item"
           v-for="item in page"
           :key="item.id">
        <div class="icon-img">
          <img :src="item.img" />
        </div>
        <div class="icon-text">
          {{ item.title }}
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"
         slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: "homeIcons",
  props: {
    icons: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    lists () {
      let pages = [];
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
.icons >>> .swiper-pagination-bullets
  bottom 0.1rem
.icons
  overflow-y visible
  padding 0.1rem 0
  background #fff
  padding-bottom 0.4rem
.icon-item
  width 25%
  float left
  margin-bottom 0.1rem
  .icon-img
    width 1.1rem
    heihgt 1.1rem
    display block
    margin 0 auto
    img
      max-width 100%
  .icon-text
    text-align center
    padding 0 0.05rem
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
</style>
