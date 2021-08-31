import { defineComponent, ref } from 'vue'
import { XIcon, CheckIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'TodoItem',

  components: {
    CloseIcon: XIcon,
    SaveIcon: CheckIcon
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
