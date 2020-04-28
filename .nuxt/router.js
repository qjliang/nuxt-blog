import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6882b03b = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _ee41ae56 = () => interopDefault(import('../pages/blogDetail.vue' /* webpackChunkName: "pages/blogDetail" */))
const _0a2172c6 = () => interopDefault(import('../pages/classify.vue' /* webpackChunkName: "pages/classify" */))
const _588c9f84 = () => interopDefault(import('../pages/life.vue' /* webpackChunkName: "pages/life" */))
const _2ad5ae6a = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _ef8aea00 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6882b03b,
    name: "about"
  }, {
    path: "/blogDetail",
    component: _ee41ae56,
    name: "blogDetail"
  }, {
    path: "/classify",
    component: _0a2172c6,
    name: "classify"
  }, {
    path: "/life",
    component: _588c9f84,
    name: "life"
  }, {
    path: "/search",
    component: _2ad5ae6a,
    name: "search"
  }, {
    path: "/",
    component: _ef8aea00,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
