<template>
  <div class="home">
    <index-header></index-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <index-recommend></index-recommend>
    <index-love></index-love>
  </div>
</template>

<script>
import indexHeader from "@/components/index/header.vue";
import homeSwiper from "@/components/index/swiper.vue";
import homeIcons from "@/components/index/icons.vue";
import indexRecommend from "@/components/index/recommend.vue";
import indexLove from "@/components/index/love.vue";

export default {
  name: "home",
  components: {
    indexHeader,
    homeSwiper,
    homeIcons,
    indexRecommend,
    indexLove
  },
  mounted() {
    console.log(this.$route);
    console.log(this.$router);
  }
};
</script>
<style lang="stylus" scoped>
.home
  background #efefef
</style>
