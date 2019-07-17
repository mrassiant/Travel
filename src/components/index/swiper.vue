<template>
  <swiper :options="swiperOption" class="swiper">
    <!-- slides -->
    <swiper-slide v-for="item of banner" :key="item.id">
      <img :src="item.img" :alt="item.title" class="swiper-img" />
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  props: {
    banner: {
      type: Array,
      requrest: true
    }
  },
  name: "homeSwiper",

  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet
  background rgba(255, 255, 255, 0.5)
.swiper >>> .swiper-pagination-bullet-active
  background #ffffff
.swiper
  width 100%
  height 0
  overflow hidden
  padding-bottom 26.66667%
  .swiper-img
    width 100%
</style>
