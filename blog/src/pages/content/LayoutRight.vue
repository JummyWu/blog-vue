<template>
    <div class="col-lg-4">
        <about></about>
        <recommend></recommend>
        <tag-wall></tag-wall>
    </div>
</template>

<script>
import About from './components/About'
import Recommend from './components/Recommend'
import TagWall from './components/TagWall'
export default {
    name: 'LayoutRight',
    components: {
        About,
        Recommend,
        TagWall,
    }
}
</script>

<style lang="css">

</style>
