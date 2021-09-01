import { defineComponent } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'TodoTitle',

  components: {
    DarkIcon: MoonIcon,
    LightIcon: SunIcon
  },

  data: () => ({
    currentTheme: null as string | null
  }),

  methods: {
    themeChange () {
      const themeRootEl = document.querySelector('body')

      if (themeRootEl) {
        themeRootEl.classList.toggle('dark')
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark'
      }
    }
  },

  mounted () {
    const themeRootEl = document.querySelector('body')?.classList

    themeRootEl?.contains('dark')
      ? this.currentTheme = 'light'
      : this.currentTheme = 'dark'
  }

})
