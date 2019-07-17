<template>
  <div>
    <div class="dbheader"
         v-show="!showAbs"
         :style="opacityStyle">
      <span class="iconfont icon-back">&#xe682;</span>
      <span class="head_title">世界之窗</span>
    </div>
    <router-link :v-show="showAbs"
                 class="abs-header"
                 to="/">
      <span class="iconfont">&#xe682;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "detailHead",
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll () {
      var top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (top > 45) {
        let opacity = top / 70;
        this.opacityStyle.opacity = opacity > 1 ? 1 : opacity;
        this.showAbs = false;

      } else {
        this.showAbs = true;
      }
    }
  },
  activated () {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated () {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.abs-header
  position absolute
  top 0.2rem
  left 0.2rem
  width 0.6rem
  height 0.6rem
  border-radius 50%
  background rgba(0, 0, 0, 0.6)
  color #fff
  text-align center
  line-height 0.6rem
  font-size 0.33rem
  z-index 19
.dbheader
  position fixed
  top 0
  left 0
  z-index 19
  width 100%
  display block
  height 0.88rem
  line-height 0.88rem
  background $header_bg
  color #ffffff
  font-size 0.3rem
  .icon-back
    float left
    padding 0 0.2rem
    font-size 0.35rem
  .head_title
    margin 0 1rem
    display block
    text-align center
</style>
