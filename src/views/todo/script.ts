/* eslint-disable brace-style */
import { defineComponent, ref } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/solid'

import TodoItem from '@/components/TodoItem/index.vue'
import TodoInput from '@/components/TodoInput/index.vue'
import TodoContainer from '@/components/TodoContainer/index.vue'

export default defineComponent({
  name: 'TodoApp',

  components: {
    TodoItem,
    TodoInput,
    TodoContainer,
    DarkIcon: MoonIcon,
    LightIcon: SunIcon
  },

  setup () {
    const todos = ref<string[]>([])

    function add (value: string) {
      const inputIsEmpty = !value.length

      inputIsEmpty
        ? alert('Empty value is not accepted')
        : todos.value.push(value)
    }

    function remove (index: number) {
      todos.value.splice(index, 1)
    }

    function update (index: number, value: string) {
      const updateTodos = todos.value.map((item, idx) => idx === index ? value : item)
      todos.value = updateTodos
    }

    return {
      todos,
      add,
      remove,
      update
    }
  }
})
