<template>
  <div class="home">
    <index-header></index-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <index-recommend></index-recommend>
  </div>
</template>

<script>
import indexHeader from "@/components/index/header.vue";
import homeSwiper from "@/components/index/swiper.vue";
import homeIcons from "@/components/index/icons.vue";
import indexRecommend from "@/components/index/recommend.vue";

export default {
  name: "home",
  components: {
    indexHeader,
    homeSwiper,
    homeIcons,
    indexRecommend
  }
};
</script>
<style lang="stylus" scoped>
.home
  background #efefef
</style>
