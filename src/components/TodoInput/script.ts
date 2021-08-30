import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TodoInput',

  emits: ['submit'],

  setup (props, ctx) {
    const value = ref<string>('')

    function submit () {
      ctx.emit('submit', value.value)
      value.value = ''
    }

    return {
      value,
      submit
    }
  }
})
