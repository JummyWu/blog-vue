import Vue from 'vue'
import Router from 'vue-router'
const Index = () => System.import('@/pages/index/Index')
const CommonFooter = () => System.import('@/pages/footer/CommonFooter')
import Home from '@/pages/home/Home'
import HomeContent from '@/pages/content/HomeContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index, 
      children: [
        {
         path: '/',
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
      ]
    }
  ]
})
