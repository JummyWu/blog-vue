<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <router-link class="logo" to="/">J&M</router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto" id="menu">
                            <li>
                                <router-link to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link to="/">Link</router-link>
                            </li>
                        </ul>
                        <div class="search-view">
                            <serach-view></serach-view> 
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import SerachView from '../../serach/SearchView.vue'
export default {
    name: 'Header',
    components: {
        SerachView,
    }
}
</script>

<style>
    .logo{
        font-size: 1.75rem;
        margin: auto 2rem;
    }
    #menu li {
        position: relative; 
        white-space: nowrap;
    }
    #menu>li {
        padding: 0.5rem 0;
        margin: 0 1rem;
    }
    #menu a {
        color: #17375E;
        font-size: 1rem;
    }
    #menu li:hover>a {
        color: #17375E;
    }
</style>
