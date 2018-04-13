import Vue from 'vue'
import methods from './utils/methods'

// 全局使用_
Object.defineProperty(Vue.prototype, '_', {
  get: function get() {
    return methods;
  }
});
Vue.prototype.appName = 'xinle'
