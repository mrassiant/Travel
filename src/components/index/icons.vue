<template>
  <swiper :options="swiperOption" class="icons">
    <!-- slides -->
    <swiper-slide>
      <div class="icon-item">
        <div class="icon-img">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
            alt=""
          />
        </div>
        <div class="icon-text">
          景点门票
        </div>
      </div>
      <div class="icon-item">
        <div class="icon-img">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
            alt=""
          />
        </div>
        <div class="icon-text">
          景点门票
        </div>
      </div>
      <div class="icon-item">
        <div class="icon-img">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
            alt=""
          />
        </div>
        <div class="icon-text">
          景点门票
        </div>
      </div>
      <div class="icon-item">
        <div class="icon-img">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
            alt=""
          />
        </div>
        <div class="icon-text">
          景点门票
        </div>
      </div>
      <div class="icon-item">
        <div class="icon-img">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
            alt=""
          />
        </div>
        <div class="icon-text">
          景点门票
        </div>
      </div>
      <div class="icon-item">
        <div class="icon-img">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
            alt=""
          />
        </div>
        <div class="icon-text">
          景点门票
        </div>
      </div>
      <div class="icon-item">
        <div class="icon-img">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
            alt=""
          />
        </div>
        <div class="icon-text">
          景点门票
        </div>
      </div>
      <div class="icon-item">
        <div class="icon-img">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
            alt=""
          />
        </div>
        <div class="icon-text">
          景点门票
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="icon-item">
        <div class="icon-img">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
            alt=""
          />
        </div>
        <div class="icon-text">
          景点门票
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: "homeIcons",
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
.icons >>> .swiper-pagination-bullets
  bottom -0.2rem
.icons
  overflow visible
  padding 0.1rem 0
  background #fff
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
