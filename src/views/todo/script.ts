/* eslint-disable brace-style */
import { defineComponent, ref } from 'vue'
import TodoItem from '@/components/todoItem/index.vue'

export default defineComponent({
  name: 'TodoApp',

  components: {
    TodoItem
  },

  setup () {
    const todos = ref<string[]>([])
    const addInput = ref<string>('')

    function addFunc () {
      const inputIsEmpty = !addInput.value.length

      if (inputIsEmpty) {
        alert('Empty value is not accepted')
      }
      else {
        todos.value.push(addInput.value)
        addInput.value = ''
      }
    }

    function delFunc (index: number) {
      todos.value.splice(index, 1)
    }

    function updateFunc (index: number, value: string) {
      const updateTodos = todos.value.map((item, idx) => idx === index ? value : item)
      todos.value = updateTodos
    }

    return {
      todos,
      addFunc,
      addInput,
      delFunc,
      updateFunc
    }
  }
})
