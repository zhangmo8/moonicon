import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'

const props = {
  // fill color
  fill: {
    type: String as PropType<string>,
    default: '#fff'
  },
  // stroke color
  stroke: {
    type: String as PropType<string>,
    default: '#333'
  },
  // recommended value 1.2
  strokeWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 1.2
  }
}

const CloudyDaytimeTwo = defineComponent({
  name: 'CloudyDaytimeTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="CloudyDaytimeTwo">
          <path d="M16.5281 12.5414C16.8719 12.2762 17.1497 11.935 17.3397 11.5445C17.5296 11.154 17.6265 10.7248 17.6229 10.2906C17.6192 9.85632 17.515 9.42884 17.3185 9.04159C17.122 8.65435 16.8385 8.31787 16.4902 8.05852C16.1419 7.79917 15.7383 7.62399 15.311 7.54671C14.8837 7.46943 14.4443 7.49215 14.0272 7.61308C13.6101 7.73402 13.2267 7.94989 12.907 8.24378C12.5873 8.53767 12.34 8.90159 12.1845 9.30703M19.3124 10.3125H20.4374M14.8124 4.6875V5.8125M10.8349 6.33492L11.6305 7.13051M18.79 6.33492L17.9944 7.13051" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M6.18545 13.7877C6.30295 13.7695 6.41171 13.7146 6.49623 13.631C6.58075 13.5474 6.63673 13.4392 6.65619 13.3219C7.08123 10.7404 8.96349 9.1875 11.1562 9.1875C13.1928 9.1875 14.553 10.5146 15.1007 11.9205C15.1359 12.0107 15.194 12.09 15.2692 12.1509C15.3444 12.2117 15.4342 12.2519 15.5296 12.2675C17.2874 12.5541 18.7499 13.7279 18.7499 15.7688C18.7499 17.857 17.0413 19.3125 14.9531 19.3125H6.7265C4.98627 19.3125 3.56244 18.4441 3.56244 16.5281C3.56244 14.8241 4.92193 13.9891 6.18545 13.7877Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { CloudyDaytimeTwo }
  