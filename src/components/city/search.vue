<template>
  <div>
    <div class="serach_input">
      <input
        type="text"
        v-model="keywords"
        placeholder="请输入您要查询的城市"
      />
    </div>
    <div class="search_list" ref="search" v-show="keywords">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          {{ item.name }}
        </li>
        <li v-show="hasNodate">没有找到匹配项</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "citySearch",
  props: ["allCity"],
  data() {
    return {
      keywords: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNodate() {
      return !this.list.length;
    }
  },
  methods: {},
  watch: {
    keywords() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        let arr = [];
        for (let i in this.allCity) {
          this.allCity[i].forEach(value => {
            if (
              value.spell.indexOf(this.keywords) > -1 ||
              value.name.indexOf(this.keywords) > -1
            ) {
              arr.push(value);
            }
          });
        }
        this.list = arr;
      });
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  }
};
</script>

<style lang="stylus" scoped>
.serach_input
  background #00bcd4
  width 100%
  display block
  padding 0.2rem 0.3rem
  box-sizing border-box
  z-index 999
  input
    width 100%
    border-radius 0.05rem
    box-sizing border-box
    padding 0.05rem 0
    text-indent 0.15rem
    color #333
    font-size 0.25rem
.search_list
  position absolute
  left 0
  bottom 0
  right 0
  top 1.5rem
  overflow hidden
  background #fcfcfc
  z-index 99
  ul
    width 100%
    li
      width 100%
      border-bottom 1px solid #cccccc
      height 0.5rem
      line-height 0.5rem
      padding 0.1rem 0.1rem
      font-size 0.25rem
      color #333
</style>
