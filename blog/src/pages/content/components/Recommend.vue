<template>
    <div class="white-board widget">
        <h5 class="widget-title">
          <router-link :to="{name: 'categorylist'}">分类</router-link>
        </h5>
        <ul class="category-list-all">
          <li v-for="item in category" :key="item.id">
            分类名:<router-link :to="{name: 'category', params:{id: item.id}}">{{ item.name }}</router-link>
            创建时间: <span>{{ item.add_time }}</span>
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
        category().then((respaonse) => {
          this.category = respaonse.data.results;
        })
      }
    },
    mounted() {
      const that = this;
      that.initCategory();
    },
    watch: {
      "$route": "initCategory"
    }
  }
</script>

<style lang="css">
    .category-list-all li {
      padding-bottom: 5px;
      padding-top: 3px;
      list-style-type: none;
    }
</style>
