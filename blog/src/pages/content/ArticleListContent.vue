<template>
    <div class="col-lg-8">
        <div class="white-board article-list">
            <section-title></section-title>
                <article>
                    <div class="row">
                        <div class="col-lg-12 info">
                            <div class="title">
                                <router-link to="/">标题</router-link>
                            </div>
                            <div class="abstract">
                                主要内容
                                <router-link to='/'>阅读全文 ></router-link>
                            </div>
                            <div class="metas">
                                2019年9月16日&nbsp;&nbsp;
                                1阅读&nbsp;&nbsp;
                                分类:<router-link to='/'>技术</router-link>&nbsp;&nbsp;
                                标签:<router-link to='/'>python</router-link>
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
