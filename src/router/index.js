import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hot from '@/pages/hot'
import dingdan from '@/pages/dingdan'
import find from '@/pages/find'
import my from '@/pages/my'
import chaxun from '@/pages/cspage/chaxun'
import customerservice from '@/pages/customerservice'
import cspage1 from '@/pages/cspage/cspage1'
import view from '@/pages/cspage/view'
import friend from '@/pages/cspage/friend'
import vip from '@/pages/cspage/vip'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      mode: 'history',
      redirect:'/hot',
      children:[
        {
          path: 'hot',
          name: 'hot',
          component: hot,
         
        },
        {
          path: 'dingdan',
          name: 'dingdan',
          component: dingdan,
          
        },
        {
          path: 'find',
          name: 'find',
          component: find
        },
        {
          path: 'customerservice',
          name: 'customerservice',
          component: customerservice,
        },
        {
          path:'chaxun',
          name:'chaxun',
          component:chaxun 
        },
        {
          path: 'friend',
          name: 'friend',
          component: friend,         
        },
        {
          path: 'vip',
          name: 'vip',
          component: vip,         
        },
        {
          path: 'cspage1',
          name: 'cspage1',
          component: cspage1,
          meta:{
            show:false
          }
        },
        {
          path: 'view',
          name: 'view',
          component: view,
          meta:{
            show:false
          }
        },
        {
          path: 'my',
          name: 'my',
          component: my
        },
      ]
    },
    

  ]
})
