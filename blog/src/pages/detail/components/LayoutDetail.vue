<template>
  <div class="col-lg-8">
    <div class="white-board detail-list">
      <bread-crumb></bread-crumb>
      <article-detail></article-detail>
      <comment></comment>
      <list-comment></list-comment>
    </div>
  </div>
</template>

<script>
  import BreadCrumb from './BreadCrumb'
  import ArticleDetail from './ArticleDetail'
  import Comment from './Comment'
  import ListComment from './ListComment'

    export default {
        name: "LayoutDetail",
        components: {
          BreadCrumb,
          ArticleDetail,
          Comment,
          ListComment,
        },
    }
</script>

<style lang="css">
  .white-board {
        margin: 5px -10px;
        padding: 10px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 1px 3px #ccc;
    }
</style>
