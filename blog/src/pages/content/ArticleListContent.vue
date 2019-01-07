<template>
    <div class="col-lg-8">
        <div class="white-board article-list">
            <section-title></section-title>
                <article v-for="article in articlelist" :key="article.id">
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
                                标签:<router-link :to="{name: 'tag', params:{id: article.tags.id}}">{{ article.tags.name }}</router-link>
                            </div>
                        </div>
                    </div>
                </article>
        </div>
    </div>
</template>

<script>
import SectionTitle from './components/SectionTitle'
import {article} from '../../api/api'

export default {
    name: 'ArticleListContent',
    data() {
      return {
        articlelist: {},
      }
    },
    components: {
        SectionTitle,
    },
    methods: {
      initArticle() {
        article().then((respaonse) => {
          this.articlelist = respaonse.data.results;
          console.log(this.articlelist)
          })
        }
      },
      mounted() {
        const that = this;
        that.initArticle();
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
    .article-list article {
        word-break: break-all;
        padding: 10px 15px;
        border-top: 1px solid lightgray;
    }
    .article-list .info {
        margin: auto 0;
        padding-left: 10px;
    }
    .article-list .title {
        font-size: 1.25rem;
    }
    .article-list .abstract {
        color: #333;
        padding: 5px 0;
    }
    .article-list .metas {
        font-size: 0.875rem;
        color: gray;
        word-break: keep-all;
    }
    .article-list .metas a {
        color: gray;
    }
</style>
