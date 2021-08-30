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
      todos.value.push(addInput.value)
    }

    function delFunc (index: number) {
      todos.value.splice(index, 1)
    }

    function updateFunc (index: number, value: string) {
      todos.value = todos.value.map((item, idx) => idx === index ? value : item)
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
