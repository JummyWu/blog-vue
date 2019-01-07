<template>
      <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="white-tag">
          <div class="list-title">
            <a href="/">首页</a>
            &nbsp;&nbsp;>&nbsp;&nbsp;
            <span>标签</span>
          </div>
          <div class="tag-all">
            <ul class="nav category-list" v-for="item in taglist" :key="item.id">
              <li class="category-list-item">
                <router-link :to="{name: 'tag', params:{id: item.id}}">{{ item.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <layout-right></layout-right>
    </div>
  </div>
</template>

<script>
  import {tag} from '../../api/api'
  import LayoutRight from '../content/LayoutRight'

    export default {
        name: "TagList",
        components: {
          LayoutRight,
        },
        data() {
          return{
            taglist: {},
          }
        },
        methods: {
          initTagList() {
            tag().then((respaonse) => {
              this.taglist = respaonse.data.results;
            })
          }
        },
        mounted() {
          const that = this;
          that.initTagList();
        },
        watch: {
          "$route": "initTagList"
        }
    }
</script>

<style lang="css">
    .white-tag {
    margin: 5px -10px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px #ccc;
  }
  .list-title {
    border-bottom: 1px solid #e5e5e5;
  }
  .white-board {
        margin: 5px -10px;
        padding: 10px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 1px 3px #ccc;
    }
</style>
