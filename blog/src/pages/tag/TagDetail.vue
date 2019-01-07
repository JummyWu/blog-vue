<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="white-cateogry">
          <div class="list-title">
            <a href="/">首页</a>
            &nbsp;&nbsp;>&nbsp;&nbsp;
            <router-link :to="{name: 'taglist'}">标签</router-link>
            &nbsp;&nbsp;>&nbsp;&nbsp;
            <span>{{ tag_name }}</span>
          </div>
          <div class="category-all">
            <article v-for="article in tag" :key="article.id">
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
                    分类:
                    <router-link :to="{name: 'category', params: {id: article.category.id}}">{{ article.category.name
                      }}
                    </router-link>&nbsp;&nbsp;
                    标签:
                    <router-link v-for="item in tags"
                                 :key="item.id"
                                 :to="{name: 'tag', params:{id: item.id}}">
                      {{ item.name }}
                    </router-link>
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
  import {tag} from '../../api/api'
  import LayoutRight from '../content/LayoutRight'
  export default {
    name: "TagDetail",
    props:['id'],
    components: {
      LayoutRight,
    },
    data() {
      return {
        tag: {},
        tag_id: '',
        tag_name: '',
        tags: {},
      }
    },
    methods: {
      initTag() {
        this.tag_id = this.$route.params.id;
        tag(this.tag_id).then((respaonse) => {
          this.tag = respaonse.data.results;
          this.tag_name = respaonse.data.results[0].tags[0].name;
          for (var i=0;i<this.tag_id.length+1;i++){
            this.tags = this.tag[i].tags;
          }
        })
      }
    },
    mounted() {
      const that = this;
      that.initTag()
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
