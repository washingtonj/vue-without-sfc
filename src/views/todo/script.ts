/* eslint-disable brace-style */
import { computed, defineComponent, ref } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/solid'

import TodoType from '@/types/todo'
import FiltersType from '@/types/filter'

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
    const filterBy = ref<FiltersType>('all')
    const todosCreated = ref<TodoType[]>([])

    const todos = computed(() => ({
      all: todosCreated.value,
      completed: todosCreated.value.filter((todo) => todo.completed),
      active: todosCreated.value.filter((todo) => !todo.completed)
    }))

    function add (todo: TodoType) {
      todosCreated.value.push(todo)
    }

    function remove (id: number) {
      const isRemovedTodo = (td: TodoType) => td.id !== id
      todosCreated.value = todosCreated.value.filter(isRemovedTodo)
    }

    function update (id: number, value: string) {
      const isUpdateTodo = (td: TodoType) => td.id === id ? { ...td, title: value } : td
      todosCreated.value = todosCreated.value.map(isUpdateTodo)
    }

    function check (id: number) {
      const isCheckTodo = (td: TodoType) => td.id === id ? { ...td, completed: !td.completed } : td
      todosCreated.value = todosCreated.value.map(isCheckTodo)
    }

    function clearCompleted () {
      todosCreated.value = todos.value.active
    }

    function filter (by: FiltersType) {
      filterBy.value = by
    }

    return {
      todos,
      filterBy,
      add,
      remove,
      update,
      check,
      filter,
      clearCompleted
    }
  }
})
