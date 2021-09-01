import { defineComponent, PropType, ref, computed, watch } from 'vue'

import TodoType from '@/types/todo'
import FilterType from '@/types/filter'

export default defineComponent({
  name: 'TodoTable',

  props: {
    data: {
      type: Array as PropType<TodoType[]>,
      required: true
    }
  },

  setup (props) {
    const filter = ref<FilterType>('all')

    const todos = computed(() => ({
      all: props.data,
      completed: props.data.filter((todo) => todo.completed),
      active: props.data.filter((todo) => !todo.completed)
    }))

    watch(props.data, () => {
      filter.value = 'all'
    })

    return {
      todos,
      filter
    }
  }

})
