<template>
  <div>
    <detail-banner></detail-banner>
    <detail-head></detail-head>
    <div class="content"></div>
  </div>
</template>

<script>
import detailHead from "@/components/detail/head.vue";
import detailBanner from "@/components/detail/banner.vue";
export default {
  data () {
    return {
      title: "详情页面"
    };
  },
  components: {
    detailHead,
    detailBanner
  }
};
</script>

<style lang="stylus" scoped>
.content
  height 20rem
</style>
