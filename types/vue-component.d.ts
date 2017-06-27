// https://github.com/locoslab/vue-typescript-import-dts
declare module '*.vue' {
  import Vue from 'vue'
  const component: Vue.ComponentOptions<Vue>
  export default component
}
