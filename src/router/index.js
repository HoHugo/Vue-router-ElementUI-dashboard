import Vue from 'vue'
import Router from 'vue-router'
import menus from '../config/navConfig'
Vue.use(Router)

var routes = []

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(`@/components/${sub.componentName}`)
    })
  })
})
export default new Router({routes})
