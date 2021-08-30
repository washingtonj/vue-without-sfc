import { defineComponent, ref } from 'vue'
import * as Icon from '@/assets/icons'

export default defineComponent({
  name: 'TodoItem',

  components: {
    CloseIcon: Icon.Cross
  },

  props: {
    value: String,
    id: [Number, String]
  },

  emits: ['remove', 'update'],

  setup (props, ctx) {
    const isEditMode = ref<boolean>(false)
    const inputValue = ref<string>(props.value || '')

    function toggleEditMode () {
      isEditMode.value = !isEditMode.value
    }

    function update () {
      ctx.emit('update', inputValue.value)
      toggleEditMode()
    }

    function remove () {
      ctx.emit('remove', props.id)
    }

    return {
      isEditMode,
      inputValue,
      toggleEditMode,
      update,
      remove
    }
  }

})
