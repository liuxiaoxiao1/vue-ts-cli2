import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorldTs.vue'
import HelloWorldVueDecorator from '@/components/HelloWorldTsVueDecorator.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/decorator',
      name: 'HelloWorldVueDecorator',
      component: HelloWorldVueDecorator
    }
  ]
})
