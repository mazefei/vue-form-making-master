import Vue from 'vue'
import Router from 'vue-router'

import Home from '../demo/Home.vue'
import Home2 from '../demo/Home2.vue'
import LanguageView from './LanguageView.vue'

Vue.use(Router)

const language = localStorage.getItem('language') || (navigator.language == 'zh-CN' ? 'zh-CN' : 'en-US')

export default new Router({
  routes: [
   /* {
      path: '/',
      redirect: to => ({name: 'index', params: {lang: language}})
    },
    {
      path: '/:lang',
      // name: 'lang',
      component: LanguageView,
      children: [
        {
          path: '',
          name: 'index',
          component: Home
        }
      ]
    },*/
      {
          path: '/',
          component: Home

      },
      {
          path: '/home2',
          component: Home2
      },
  ]
})