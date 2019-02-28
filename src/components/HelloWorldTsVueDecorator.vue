<template>
  <div class="hello">
    <h1>{{ data }}</h1>
    <router-link :to="'/'" >test</router-link>
    <input v-model="data" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import _ from 'lodash'

// vue-property-decorator
@Component
export default class App extends Vue {
  // 初始化数据
  @Prop()
  msg: string = 'Welcome to Vue ts';
  data: String = 'Welcome to Vue ts hahaha '
  // 声明周期钩子
  mounted () {
    this.greet()
    // myThis:any = this
    // console.log(foo)
    this.$Message = '33'
    // setTimeout(() => {
    //   this.$message.error('warfsdf')
    // })
    this.$message.success(`this.$Message ${this.$Message}`)
    console.log('kkk')
    // for (let a in _) {
    //   console.log(`_[${a}]`, _[a])
    // }
    // alert(H)
  }
  // 计算属性
  get computedMsg () {
    return this.data + ''
  }
  // 方法
  greet () {
    console.log(this.data)
    // this.$Message({
    //   message: '恭喜你，这是一条成功消息',
    //   type: 'success'
    // })
  }
  @Watch('data')
  onMsgChange (val: string, oldVal: string) {
    console.log('new val', val)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
