<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="logo" href="#">J&M</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto" id="menu">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">Link</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
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
    }
    #menu li:hover>a {
        color: #17375E;
    }
</style>
