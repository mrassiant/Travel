<template>
  <div>
    <div class="city_title">
      字母排序
    </div>
    <div class="word_list">
      <div class="list_item">A</div>
      <div class="list_item">B</div>
      <div class="list_item">C</div>
      <div class="list_item">D</div>
      <div class="list_item">E</div>
      <div class="list_item">F</div>
      <div class="list_item">G</div>
      <div class="list_item">H</div>
      <div class="list_item">I</div>
      <div class="list_item">J</div>
      <div class="list_item">K</div>
      <div class="list_item">L</div>
      <div class="list_item">M</div>
      <div class="list_item">N</div>
      <div class="list_item">O</div>
      <div class="list_item">P</div>
      <div class="list_item">Q</div>
      <div class="list_item">R</div>
      <div class="list_item">S</div>
      <div class="list_item">T</div>
      <div class="list_item">U</div>
      <div class="list_item">V</div>
      <div class="list_item">W</div>
      <div class="list_item">X</div>
      <div class="list_item">Y</div>
      <div class="list_item">Z</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wordCity",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.city_title
  city_title()
.word_list
  width 100%
  display block
  overflow hidden
  background #ffffff
  .list_item
    width 16.666%
    display block
    float left
    box-sizing border-box
    font-size 0.25rem
    text-align center
    padding 0.22rem 0
</style>
