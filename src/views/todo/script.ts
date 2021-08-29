import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TodoApp',

  setup () {
    const todos = ref<string[]>([])
    const addInput = ref<string>('')

    function addFunc () {
      todos.value.push(addInput.value)
    }

    function delFunc (index: number) {
      todos.value.splice(index, 1)
    }

    return {
      todos,
      addFunc,
      addInput,
      delFunc
    }
  }

})
