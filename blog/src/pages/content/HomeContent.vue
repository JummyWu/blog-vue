<template>
    <main>
        <div class="container">
            <div class="row">
                    <article-list-content></article-list-content>
                    <layout-right></layout-right>
            </div>
        </div>
    </main>
</template>

<script>
import SectionTitle from './components/SectionTitle'
import ArticleListContent from './ArticleListContent'
import LayoutRight from './LayoutRight'
export default {
    name: 'HomeContent',
    components: {
        SectionTitle,
        ArticleListContent,
        LayoutRight,
    }
}
</script>

<style>
 main {
    margin: 15px 0;
    display: block;
 }
</style>
