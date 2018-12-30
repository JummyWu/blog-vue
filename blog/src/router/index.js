import Vue from 'vue'
import Router from 'vue-router'

const Index = () => System.import('@/pages/index/Index')
const CommonFooter = () => System.import('@/pages/footer/CommonFooter')
import Home from '@/pages/home/Home'
import HomeContent from '@/pages/content/HomeContent'
import Detail from '@/pages/detail/Detail'
import Recommend from '@/pages/content/components/Recommend'


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
          path: 'category/:id',
          name: 'category',
          components: {
            header: Home,
            content: Recommend,
            footer: CommonFooter,
          },
          meta: {
            title: '分类',
          }
        },
      ]
    }
  ]
})
