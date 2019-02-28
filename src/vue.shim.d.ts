// import * as lodash from 'lodash'



// 全局变量设置
// declare global {
//   const _: typeof lodash
// }
import Vue from 'vue'
// iview 全局方法
declare module 'vue/types/vue' {
  interface Vue {
    $Message: string,
    $Modal: any
  }
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
