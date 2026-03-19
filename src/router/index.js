import Vue from 'vue'
import Router from 'vue-router'
import Grid from '@/components/Grid'
import Random from '@/components/Random'
import List from '@/components/List'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'grid',
      component: Grid,
      alias: '/grid'
    },
    {
      path: '/random/:id',
      name: 'random',
      component: Random
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/edit/:key',
      name: 'edit',
      component: Edit
    }
  ]
})
