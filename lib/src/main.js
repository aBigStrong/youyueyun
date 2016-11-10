import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import configRouter from './route-config'


Vue.use(VueResource);
Vue.use(VueRouter)

//create router
const router = new VueRouter({
//	hashbang: true,
//	history: false,
//	saveScrollPosition: true,
//	transitionOnLoad: true
})

//configure router
configRouter(router)

//main view
const App = Vue.extend()

router.start(App, 'body')