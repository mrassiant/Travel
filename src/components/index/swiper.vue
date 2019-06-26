<template>
  <swiper :options="swiperOption" class="swiper">
    <!-- slides -->
    <swiper-slide>
      <img
        src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"
        alt=""
        class="swiper-img"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/13484aec53ee7364ad3e2b95828c2446.jpg_750x200_0e31fdea.jpg"
        alt=""
        class="swiper-img"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/e440c31af79c0b9d1a1e84c577205562.jpg_750x200_0729c45b.jpg"
        alt=""
        class="swiper-img"
      />
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
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
