<template>
  <div id="city">
    <city-header></city-header>
    <hot-city></hot-city>
    <word-city></word-city>
    <all-city></all-city>
  </div>
</template>

<script>
import cityHeader from "@/components/city/header";
import hotCity from "@/components/city/hot";
import wordCity from "@/components/city/word";
import allCity from "@/components/city/all";
export default {
  components: {
    cityHeader,
    hotCity,
    wordCity,
    allCity
  },
  data() {
    return {
      title: "城市页面"
    };
  }
};
</script>

<style lang="stylus" scoped>
#city
  background #f5f5f5
</style>
