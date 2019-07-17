<template>
  <div ref="wrapper"
       class="lists">
    <div>
      <div id="hotCity">
        <div class="city_title">
          热门城市
        </div>
        <div class="city_list">
          <div class="list_item"
               v-for="item in hotCity"
               :key="item.id"
               @click="changeCity(item.name)">
            {{ item.name }}
          </div>
        </div>
      </div>

      <div id="allCitys">
        <div class="all_item"
             v-for="(item, key) in allCity"
             :key="key"
             :ref="key">
          <div class="city_title">
            {{ key }}
          </div>
          <div class="all_list">
            <div class="list_item"
                 v-for="c in item"
                 :key="c.id"
                 @click="changeCity(c.name)">
              {{ c.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "allCity",
  props: ["allCity", "hotCity", "code"],
  mounted () {
    this.$nextTick(function () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, { click: true });
      } else {
        this.scroll.refresh();
      }
    })
  },
  watch: {
    code () {
      if (this.code) {
        const area = this.$refs[this.code][0];
        this.scroll.scrollToElement(area, 1000);
      }
    }
  },
  methods: {
    changeCity (city) {
      this.$store.dispatch("changeCity", city);
      this.$router.push("/");
    }
  },
  computed: {
    words () {
      let words = [];
      for (let k in this.allCity) {
        words.push(k);
      }
      return words;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.lists
  position absolute
  top 1.4rem
  bottom 0
  overflow hidden
  width 100%
  .city_title
    city_title()
    width 100%
    background #efefef
  .city_list
    width 100%
    display block
    background #fff
    overflow hidden
  .list_item
    width 33.333%
    display block
    box-sizing border-box
    float left
    text-align center
    padding 0.2rem 0
    border-bottom 1px solid #cccccc
    border-right 1px solid #cccccc
    &:nth-child(3n)
      border-right none
    &:nth-last-child(1), &:nth-last-child(2), &:nth-last-child(3)
      border-bottom none
  .all_item
    width 100%
    display block
  .all_list
    width 100%
    display block
    overflow hidden
    background #ffffff
    .list_item
      width 25%
      display block
      float left
      box-sizing border-box
      padding 0.25rem 0
      border-bottom 1px solid #cccccc
      border-right 1px solid #cccccc
      margin-bottom -1px
      text-align center
      font-size 0.22rem
      ellsipsis()
      &:nth-child(4n)
        border-right none
</style>
