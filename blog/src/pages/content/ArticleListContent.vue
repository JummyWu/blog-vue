<template>
    <div class="col-lg-8">
        <div class="white-board article-list">
            <section-title></section-title>
                <article v-for="item in articleLists" :key="item.id">
                    <div class="row">
                        <div class="col-lg-12 info">
                            <div class="title">
                                <router-link :to="{name: 'detail', params:{id: item.id}}">{{ item.title }}</router-link>
                            </div>
                            <div class="abstract">
                                {{ item.duce }}
                                <router-link to='detail/1/'>阅读全文 ></router-link>
                            </div>
                            <div class="metas">
                                2019年9月16日&nbsp;&nbsp;
                                {{ item.read }}阅读&nbsp;&nbsp;
                                分类:<router-link to='/'>{{ item.category.name }}</router-link>&nbsp;&nbsp;
                                标签:<router-link to='/'>{{ item.tags.name }}</router-link>
                            </div>
                        </div>
                    </div>
                </article>
        </div>
    </div>
</template>

<script>
import SectionTitle from './components/SectionTitle'
export default {
    name: 'ArticleListContent',
    data() {
      return {
        articleList: [],
        page_next: "",
        previous: "",
      }
    },
    computed: {
      articleLists: function () {
        return this.articleList;
      }
    },
    methods: {
      initArticleData() {
        if (this.$route.query['category']) {
          articleList(this.$route.query['category']).then(this.articleData);
          this.header = this.$route.query['name'];
        } else {
          articleList().then(this.articleData);
          this.hader = '文章列表'
        }
      },
      articleData(response) {
        let list = response.data;
        if (list.state == 200) {
          this.articleList = list.result.results;
          this.page_next = list.result.next;
          this.articleList = list.result.results;
        }
      },
      pagData(url) {
        var that = this;
        page_data(url).then((response) => {
          that.previous = response.data.result.previous;
          that.page_next = response.data.result.next;
          that.articleList = response.data.result.results;
        });
      }
    },
    mounted() {
        this.initArticleData();
    },
    watch: {
      "$route": "initArticleDate"
    },
    components: {
        SectionTitle,
    }
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
