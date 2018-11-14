<template>
    <div class="white-board widget">
        <h6 class="widget-title">Jummy & Sweet</h6>
        <p>
            <img class="widget-title" src="../../../../static/WechatIMG13223.jpeg" alt="Jummy">
        </p>
        <ul class="social-list">
            <li>
                <a href='https://github.com/JummyWu'>
                    <i class="ivu-icon ivu-icon-logo-github" style="font-size: 32px;"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

</script>

<style lang="css">
    .widget {
        margin-bottom: 10px;
        padding: 10px;
    }
    .widget-title {
        border-bottom: 1px solid lightgray;
        padding: 10px;
        margin-bottom: 0;
    }
    .widget p {
        padding: 10px; margin: 0;
    }
    .widget .social-list {
        padding: 10px;
        display: flex;
        align-items: center;
        border-top: 1px solid lightgray;
        padding-bottom: 0;
    }
    .widget .social-list li {
        list-style-type: none;
        margin-right: 10px;
    }
    img {
        max-width: 100%;
        height:auto;
        border-radius: 5px;
    }
</style>
