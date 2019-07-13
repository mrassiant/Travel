<template>
  <div id="city">
    <city-header></city-header>
    <hot-city></hot-city>
  </div>
</template>

<script>
import cityHeader from "@/components/city/header"
import hotCity from '@/components/city/hot'
export default {
  components: {
    cityHeader,
    hotCity
  },
  data () {
    return {
      title: "城市页面"
    }
  }
}
</script>

<style lang="stylus" scoped>
#city
  background #f5f5f5
</style>