<template>
    <main>
        <div class="container">
            <div class="row">
                    <layout-detail></layout-detail>
                    <layout-right></layout-right>
            </div>
        </div>
    </main>
</template>

<script>
  import LayoutRight from '../content/LayoutRight'
  import LayoutDetail from './components/LayoutDetail'

    export default {
        name: "detail",
        components: {
          LayoutRight,
          LayoutDetail,
        }
    }
</script>

<style lang="css" scoped>
 main {
    margin: 15px 0;
    display: block;
 }
</style>
