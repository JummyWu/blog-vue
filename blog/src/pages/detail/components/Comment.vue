<template>
  <div class="comment">
    <div class="comment-num">
      评论
    </div>
    <form class="comment-form">
      <textarea class="textarea-comment" name="content" maxlength="500" required_id="id_content" placeholder="写下你的评论">
      </textarea>
      <div class="comment-botton">
        <button type="button" class="btn btn-secondary">提交</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Comment"
  }
</script>

<style scoped>
  .comment {
    padding-top: 10px;
    padding-left: 10px;
  }
  .comment-num {
    padding: 16px 0;
    font-size: 1.2rem;
    border-top: 1px solid lightgray;
  }
  .textarea-comment {
    width: 100%;
    resize: vertical;
    height: 8rem;
    padding: 10px;
    overflow: auto;
    font-size: inherit;
    box-sizing: border-box;
    font-family: inherit;
    line-height: inherit;
    margin-bottom: 10px;
    border-radius: 4px;
  }
  .comment-botton {
    text-align: right;
    margin-bottom: 16px;
  }
</style>
