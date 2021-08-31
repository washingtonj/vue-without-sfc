import { defineComponent, ref } from 'vue'
import filterBy from '@/types/filter'

export default defineComponent({
  name: 'TodoTable',

  props: {
    total: {
      type: Number,
      required: true,
      default: 0
    },

    isEmpty: {
      type: Boolean,
      requied: false,
      default: false
    }
  },

  emits: ['filter', 'clear'],

  setup (props, ctx) {
    const selected = ref<filterBy>('all')

    function filter (by: filterBy) {
      ctx.emit('filter', by)
      selected.value = by
    }

    function clear () {
      ctx.emit('clear')
    }

    return {
      selected,
      filter,
      clear
    }
  }

})
