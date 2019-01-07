import Vue from 'vue'
import Router from 'vue-router'

const Index = () => System.import('@/pages/index/Index')
const CommonFooter = () => System.import('@/pages/footer/CommonFooter')
import Home from '@/pages/home/Home'
import HomeContent from '@/pages/content/HomeContent'
import Detail from '@/pages/detail/Detail'
import CategoryList from '@/pages/cateogry/CategoryList'
import CategoryDetail from '@/pages/cateogry/CategoryDetail'
import TagList from '@/pages/tag/TagList'
import TagDetail from '@/pages/tag/TagDetail'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
      meta: {
        title: 'jummy-blog'
      },
      children: [
        {
          path: '',
          name: 'index',
          components: {
            header: Home,
            content: HomeContent,
            footer: CommonFooter,
          },
          meta: {
            title: '首页',
          }
        },
        {
          path: 'detail/:id',
          name: 'detail',
          components: {
            header: Home,
            content: Detail,
            footer: CommonFooter,
          },
          meta: {
            title: '详情',
            need_log: false,
          }
        },
        {
          path: 'category',
          name: 'categorylist',
          components: {
            header: Home,
            content: CategoryList,
            footer: CommonFooter,
          },
          meta: {
            title: '分类',
          }
        },
        {
          path: 'category/:id',
          name: 'category',
          components: {
            header: Home,
            content: CategoryDetail,
            footer: CommonFooter,
          },
          props: true,
          meta: {
            title: '分类详情',
          }
        },
        {
          path: 'tag',
          name: 'taglist',
          components: {
            header: Home,
            content: TagList,
            footer: CommonFooter,
          },
          meta: {
            title: '标签',
          }
        },
        {
          path: 'tag/:id',
          name: 'tag',
          components: {
            header: Home,
            content: TagDetail,
            footer: CommonFooter,
          },
          props: true,
          meta: {
            title: '标签详情',
          },
        },
      ]
    }
  ]
})
