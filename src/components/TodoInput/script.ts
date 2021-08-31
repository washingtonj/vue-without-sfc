import { defineComponent, ref } from 'vue'

import TodoType from '@/types/todo'

export default defineComponent({
  name: 'TodoInput',

  emits: ['create'],

  setup (props, ctx) {
    const value = ref<string>('')

    function create () {
      const newTodo: TodoType = {
        id: Number(Math.random().toFixed(5)),
        title: value.value,
        completed: false
      }

      value.value.length <= 0
        ? alert('insert a value to create')
        : ctx.emit('create', newTodo)

      value.value = ''
    }

    return {
      value,
      create
    }
  }
})
