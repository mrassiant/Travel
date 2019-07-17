<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="this.$route.meta.keepAlive"></router-view>
    </keep-alive>
  </div>
</template>
<style lang="stylus"></style>
