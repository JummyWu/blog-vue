<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="white-cateogry">
          <div class="list-title">
            <a href="/">首页</a>
            &nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link :to="{name: 'categorylist'}">分类</router-link>
            &nbsp;&nbsp;>&nbsp;&nbsp;
            <span>{{ category_name }}</span>
          </div>
          <div class="category-all">
            <article v-for="article in category" :key="article.id">
                    <div class="row">
                        <div class="col-lg-12 info">
                            <div class="title">
                                <router-link :to="{name:'detail', params: {id: article.id}}">{{ article.title }}</router-link>
                            </div>
                            <div class="abstract">
                                {{ article.html }}
                                <router-link :to="{name:'detail', params: {id: article.id}}">阅读全文 ></router-link>
                            </div>
                            <div class="metas">
                                {{ article.add_time }}&nbsp;&nbsp;
                                阅读:{{ article.pv }}&nbsp;&nbsp;
                                分类:<router-link :to="{name: 'category', params: {id: article.category.id}}">{{ article.category.name }}</router-link>&nbsp;&nbsp;
                                标签:
                                <span>{{ taglists.name }}</span>
                            </div>
                        </div>
                    </div>
                </article>
          </div>
        </div>
      </div>
      <layout-right></layout-right>
    </div>
  </div>
</template>

<script>
  import {category} from '../../api/api'
  import LayoutRight from '../content/LayoutRight'
  export default {
    name: "CategoryDetail",
    props: ['id'],
    components: {
        LayoutRight
    },
    data() {
      return{
        category: {},
        cateogry_id: '',
        category_name: '',
        taglists: [],
      }
    },
    methods: {
      initCategory() {
        this.cateogry_id = this.$route.params.id;
        category(this.cateogry_id).then((respaonse) => {
          this.category = respaonse.data.results;
          this.category_name = respaonse.data.results[0].category.name;
          console.log(this.category[0]);
          for(var i=0; i<this.cateogry_id.length + 1; i++){
            // console.log(this.category[i].tags[i]);
            this.taglists = this.category[i].tags[i];
          };
          // console.log(this.category[0].tags[0])
          // console.log(this.taglists)
          // console.log(this.category[0].tags[0].name);
          })
        }
      },
    mounted() {
      const that = this;
      that.initCategory();
    },
    watch: {
        "$route": "initCategoryList"
    },
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
  .category-all {
    margin-top: 20px;
  }
  .category-list-item > a {
    color: #555;
    text-decoration: none;
    outline: none;
    border-bottom: 1px solid #999;
    word-wrap: break-word;
  }
  .category-all article {
    word-break: break-all;
    padding: 10px 15px;
    border-top: 1px solid lightgray;
  }
  .info {
    margin: auto 0;
    padding-left: 10px;
  }
  .title {
    font-size: 1.25rem;
  }
  .abstract {
    color: #333;
    padding: 5px 0;
  }
  .metas {
    font-size: 0.875rem;
    color: gray;
    word-break: keep-all;
  }
  .white-board {
        margin: 5px -10px;
        padding: 10px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 1px 3px #ccc;
    }

</style>
