<template>
  <div class="home">
    <index-header></index-header>
    <home-swiper :banner="banner"></home-swiper>
    <home-icons :icons="icons"></home-icons>
    <index-recommend :hot="hot"></index-recommend>
    <index-love :love="love"></index-love>
    <index-week :week="week"></index-week>
  </div>
</template>

<script>
import indexHeader from "@/components/index/header.vue";
import homeSwiper from "@/components/index/swiper.vue";
import homeIcons from "@/components/index/icons.vue";
import indexRecommend from "@/components/index/recommend.vue";
import indexLove from "@/components/index/love.vue";
import indexWeek from "@/components/index/week.vue";

export default {
  name: "home",
  components: {
    indexHeader,
    homeSwiper,
    homeIcons,
    indexRecommend,
    indexLove,
    indexWeek
  },
  data() {
    return {
      banner: [],
      icons: [],
      hot: [],
      love: [],
      week: []
    };
  },
  methods: {
    async getIndexInfos() {
      const res = await this.$http.get("/api/index.json");
      const data = res.data;
      if (data.rest) {
        const rest = data.data;
        this.banner = rest.banner;
        this.icons = rest.icons;
        this.hot = rest.hotimg;
        this.love = rest.loveimg;
        this.week = rest.weekimg;
      }
    }
  },
  mounted() {
    this.getIndexInfos();
  }
};
</script>
<style lang="stylus" scoped>
.home
  background #efefef
</style>
