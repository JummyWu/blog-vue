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
        padding-top: 40px;
        bottom: 0;
        width: 100%;
        padding-bottom: 30px;
        margin-top: 100px;
        background-color: white;
        border-top: 1px solid #eee;
        text-align: center;
        color: gray;
        font-size: 0.8rem;
    }
</style>
