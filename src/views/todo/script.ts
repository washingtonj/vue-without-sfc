/* eslint-disable brace-style */
import { defineComponent, ref } from 'vue'

import TodoType from '@/types/todo'

import TodoTitle from '@/components/TodoTitle/index.vue'
import TodoItem from '@/components/TodoItem/index.vue'
import TodoInput from '@/components/TodoInput/index.vue'
import TodoTable from '@/components/TodoTable/index.vue'

import Draggable from 'vuedraggable'

export default defineComponent({
  name: 'TodoApp',

  components: {
    TodoTitle,
    TodoItem,
    TodoInput,
    TodoTable,
    Draggable
  },

  setup () {
    const todos = ref<TodoType[]>([])

    function add (todo: TodoType) {
      todos.value = [todo, ...todos.value]
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

    function clearCompleted () {
      const isCompletedTodo = (td: TodoType) => !td.completed
      todos.value = todos.value.filter(isCompletedTodo)
    }

    return {
      todos,
      add,
      remove,
      update,
      check,
      clearCompleted
    }
  }
})
