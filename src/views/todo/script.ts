/* eslint-disable brace-style */
import { defineComponent, ref } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/solid'

import TodoType from '@/types/todo'

import TodoItem from '@/components/TodoItem/index.vue'
import TodoInput from '@/components/TodoInput/index.vue'
import TodoTable from '@/components/TodoTable/index.vue'

export default defineComponent({
  name: 'TodoApp',

  components: {
    TodoItem,
    TodoInput,
    TodoTable,
    DarkIcon: MoonIcon,
    LightIcon: SunIcon
  },

  setup () {
    const todos = ref<TodoType[]>([])

    function add (todo: TodoType) {
      todos.value.push(todo)
    }

    function remove (id: number) {
      const isRemovedTodo = (td: TodoType) => td.id !== id
      todos.value = todos.value.filter(isRemovedTodo)
    }

    function update (id: number, value: string) {
      const isUpdateTodo = (td: TodoType) => td.id === id ? { ...td, title: value } : td
      todos.value = todos.value.map(isUpdateTodo)
    }

    function check (id: number) {
      const isCheckTodo = (td: TodoType) => td.id === id ? { ...td, completed: !td.completed } : td
      todos.value = todos.value.map(isCheckTodo)
    }

    return {
      todos,
      add,
      remove,
      update,
      check
    }
  }
})
