<template>
  <div class="recommend">
    <div class="recommend-title">本周热门榜单</div>
    <div class="recommend-content">
      <div class="recommend-item">
        <div class="item-img">
          <img
            src="http://img1.qunarzz.com/sight/p0/1905/e6/e683c8cf5e97ce03a3.img.jpg_250x250_010a4f10.jpg"
            alt="世界之窗"
          />
        </div>
        <div class="item-text">世界之窗</div>
      </div>
      <div class="recommend-item">
        <div class="item-img">
          <img
            src="http://img1.qunarzz.com/sight/p0/1905/e6/e683c8cf5e97ce03a3.img.jpg_250x250_010a4f10.jpg"
            alt="世界之窗"
          />
        </div>
        <div class="item-text">世界之窗</div>
      </div>
      <div class="recommend-item">
        <div class="item-img">
          <img
            src="http://img1.qunarzz.com/sight/p0/1905/e6/e683c8cf5e97ce03a3.img.jpg_250x250_010a4f10.jpg"
            alt="世界之窗"
          />
        </div>
        <div class="item-text">世界之窗</div>
      </div>
      <div class="recommend-item">
        <div class="item-img">
          <img
            src="http://img1.qunarzz.com/sight/p0/1905/e6/e683c8cf5e97ce03a3.img.jpg_250x250_010a4f10.jpg"
            alt="世界之窗"
          />
        </div>
        <div class="item-text">世界之窗</div>
      </div>
      <div class="recommend-item">
        <div class="item-img">
          <img
            src="http://img1.qunarzz.com/sight/p0/1905/e6/e683c8cf5e97ce03a3.img.jpg_250x250_010a4f10.jpg"
            alt="世界之窗"
          />
        </div>
        <div class="item-text">世界之窗</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "indexRecommend"
};
</script>
<style lang="stylus" scoped>
.recommend
  margin-top 0.2rem
  padding-left 0.2rem
  background #fff
  .recommend-title
    padding 0.1rem 0
    font-size 0.3rem
    margin-bottom 0.1rem
  .recommend-content
    width 100%
    overflow-x scroll
    white-space nowrap
    padding-bottom 0.15rem
    .recommend-item
      width 2rem
      display inline-block
      margin-right 0.15rem
      .item-img
        width 100%
        img
          width 100%
      .item-text
        text-align center
        font-size 0.25rem
        margin-top 0.1rem
        padding 0.05rem 0
        width 100%
        white-sapce nowrap
        overflow hidden
        text-overflow ellipsis
</style>
