<template>
  <div id="app">
    <div>
      <input v-model="inputValue">
      <button @click="handleSubmit">submit</button>
    </div>
    <ul>
      <todo-item
        v-for="(item , index) of list"
        :key="index"
        :content="item"
        :index="index"
        @delete="handleDelete"
      >{{item}}</todo-item>
    </ul>
  </div>
</template>

<script>
// 引入子组件
import TodoItem from './components/todo-item'
export default {
  components: {
    'todo-item': TodoItem
  },
  // data数据为函数形式
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit () {
      this.list.push(this.inputValue)
      this.inputValue = ''
    },
    handleDelete (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
