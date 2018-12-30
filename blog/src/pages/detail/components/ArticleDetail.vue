<template>
  <div>
    <h2 class="under_line">
      <span>开头</span>
    </h2>
    <div class="info">
      2018年10月28日 23:00 阅读:5 分类:<a href="#">python</a>
    </div>
    <div class="post-detail">
      文章详情信息
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleDetail"
  }
</script>

<style lang="css" scoped>
  .under_line {
    padding-bottom: 10px;
    padding-left: 10px;
  }
  .info {
    padding-left: 10px;
    color: gray;
    font-size: 0.875rem;
    word-break: keep-all;
  }
  .post-detail {
    padding-left: 10px;
    color: #333;
    margin-top: 1.25rem;
  }
</style>
