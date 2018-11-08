<template>
    <div class="header">
        <home-header/>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
export default {
    name: 'Home',
    components: {
        HomeHeader,
    }
}
</script>

<style>
    .header{
        background-color: white;
        box-shadow: 0 1px 3px #ccc;
    }
</style>
