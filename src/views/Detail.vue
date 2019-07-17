<template>
  <div id="detailPage">
    <detail-banner></detail-banner>
    <detail-head></detail-head>
    <detail-info></detail-info>
    <detail-recommend :recommend="recommend"></detail-recommend>
    <detail-tickit :tickit="tickit"></detail-tickit>
  </div>
</template>

<script>
import detailHead from "@/components/detail/head.vue";
import detailBanner from "@/components/detail/banner.vue";
import detailInfo from "@/components/detail/info.vue";
import detailRecommend from "@/components/detail/recommend.vue";
import detailTickit from "@/components/detail/tickit.vue";
export default {
  data () {
    return {
      recommend: [],
      tickit: []
    };
  },
  components: {
    detailHead,
    detailBanner,
    detailInfo,
    detailRecommend,
    detailTickit
  },
  methods: {
    async getDetail () {
      const res = await this.$http.get("/api/detail.json");
      const data = res.data;
      if (data.rest) {
        const dt = data.data;
        this.recommend = dt.recommend;
        this.tickit = dt.tickit;
      }
    }
  },
  mounted () {
    this.getDetail();
  }
};
</script>

<style lang="stylus" scoped>
#detailPage
  background #efefef
.content
  height 20rem
</style>
