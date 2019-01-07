<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="white-cateogry">
          <div class="list-title">
            <a href="/">首页</a>
            &nbsp;&nbsp;>&nbsp;&nbsp;
            <span>分类</span>
          </div>
          <div class="category-all">
            <ul class="nav category-list" v-for="item in categorylist" :key="item.id">
              <li class="category-list-item">
                <router-link :to="{name: 'category', params:{id: item.id}}">{{ item.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <layout-right></layout-right>
    </div>
  </div>
</template>

<script>
    import {category} from "../../api/api";
    import LayoutRight from '../content/LayoutRight'

    export default {
      name: "CategoryList",
      components: {
        LayoutRight
      },
      data() {
          return{
            categorylist: {}
          }
        },
      methods: {
      initCategoryList() {
        category().then((respaonse) => {
          this.categorylist = respaonse.data.results;
          })
        }
      },
      mounted() {
        const that = this;
        that.initCategoryList();
      },
      watch: {
        "$route": "initCategoryList"
      }
    }
</script>

<style lang="css">
  .white-cateogry {
    margin: 5px -10px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px #ccc;
  }
  .list-title {
    border-bottom: 1px solid #e5e5e5;
  }
  .category-all {
    margin-top: 20px;
  }
  .category-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .category-list-item {
    margin: 5px 10px;
  }
  .category-list-item > a {
    color: #555;
    text-decoration: none;
    outline: none;
    border-bottom: 1px solid #999;
    word-wrap: break-word;
  }
  .white-board {
        margin: 5px -10px;
        padding: 10px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 1px 3px #ccc;
    }
</style>
