<template>
  <div id="city">
    <city-header></city-header>
    <city-search :allCity="allCity"></city-search>

    <all-city :allCity="allCity"
              :hotCity="hotCity"
              :code="code">
    </all-city>
    <word-list :allCity="allCity"
               @changePosition="changePosition">
    </word-list>

  </div>
</template>
<script>
import cityHeader from "@/components/city/header";
import citySearch from "@/components/city/search";
import allCity from "@/components/city/all";
import wordList from "@/components/city/word";
export default {
  components: {
    cityHeader,
    allCity,
    wordList,
    citySearch
  },
  data () {
    return {
      hotCity: [],
      allCity: [],
      code: ''
    };
  },
  methods: {
    async getCitys () {
      const cityData = await this.$http.get("/api/city.json");
      const data = cityData.data;
      if (data.rest) {
        const res = data.data;
        let hotCity = res.hotCities;
        let allCity = res.cities;
        this.allCity = allCity;
        this.hotCity = hotCity;
      }
    },
    changePosition (e) {
      this.code = e;
    }
  },
  mounted () {
    this.getCitys();
  }
};
</script>

<style lang="stylus" scoped>
#city
  background #f5f5f5
</style>
