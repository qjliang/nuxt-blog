import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7511a6ba = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _741d2c94 = () => interopDefault(import('../pages/blogDetail.vue' /* webpackChunkName: "pages/blogDetail" */))
const _7ae077e7 = () => interopDefault(import('../pages/classify.vue' /* webpackChunkName: "pages/classify" */))
const _58426ddf = () => interopDefault(import('../pages/life.vue' /* webpackChunkName: "pages/life" */))
const _9fb4f06a = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _d66cfd02 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _7511a6ba,
    name: "about"
  }, {
    path: "/blogDetail",
    component: _741d2c94,
    name: "blogDetail"
  }, {
    path: "/classify",
    component: _7ae077e7,
    name: "classify"
  }, {
    path: "/life",
    component: _58426ddf,
    name: "life"
  }, {
    path: "/search",
    component: _9fb4f06a,
    name: "search"
  }, {
    path: "/",
    component: _d66cfd02,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
