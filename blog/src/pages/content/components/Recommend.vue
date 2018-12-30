<template>
    <div class="white-board widget">
        <h5 class="widget-title">分类</h5>
        <ul class="social-list">
            <li v-for="item in category" :key="item.id">
                <router-link :to="{name: 'category', params:{id:item.id}}">{{ item.name }}</router-link>
                <span>{{ item.add_time }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
  import {category} from "../../../api/api";

  export default {
    name: 'Recommend',
    data() {
      return {
        category: {},
      }
    },
    methods: {
      initCategory() {
        getCategory({
          params: {}
        }).then((response) => {
          console.log(response)
          this.category = response.data
        })
          .catch(function (error) {
            console.log(error)
          });
      }
    },
    mounted() {
      const that = this;
      this.axios.get('http://127.0.0.1:8000/api/category/1/').then(res=>this.category=res.data)
        .catch(error => console.log(error))
    }
  }
</script>

<style lang="css">
    
</style>
