<template>
    <footer>
        <footer-bei></footer-bei>
    </footer>
</template>

<script>
import FooterBei from './components/FooterBei'
export default {
    name: 'CommonFooter',
    components: {
        FooterBei,
    }
}
</script>

<style>
    footer{
        padding: 20px;
        background-color: white;
        border-top: 1px solid #eee;
        text-align: center;
        color: gray;
        font-size: 0.8rem;
    }
</style>
