<template>
  <div class="home">
    <index-header></index-header>
    <home-swiper></home-swiper>
    test html
  </div>
</template>

<script>
import indexHeader from "@/components/index/header.vue";
import homeSwiper from "@/components/index/swiper.vue";
export default {
  name: "home",
  components: {
    indexHeader,
    homeSwiper
  }
};
</script>
