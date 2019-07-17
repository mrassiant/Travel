<template>
  <div>
    <div class="word_list">
      <div class="list_item"
           v-for="item in words"
           :key="item"
           @click="changePosition">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wordCity",
  props: ["allCity"],
  data () {
    return {};
  },
  methods: {
    changePosition (e) {
      let code = e.target.innerText;
      this.$emit("changePosition", code);
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
.city_title
  city_title()
.word_list
  position fixed
  top 0rem
  bottom 0
  right 0rem
  width 0.5rem
  display flex
  flex-direction column
  justify-content center
  overflow hidden
  text-align center
  color #00bcd4
  .list_item
    background #ffffff
    padding 0.03rem 0
</style>
