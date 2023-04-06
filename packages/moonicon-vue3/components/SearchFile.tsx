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

const SearchFile = defineComponent({
  name: 'SearchFile',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SearchFile">
          <path d="M16.0757 16.9243C16.3101 17.1586 16.6899 17.1586 16.9243 16.9243C17.1586 16.6899 17.1586 16.3101 16.9243 16.0757L16.0757 16.9243ZM11 8.6C12.0044 8.6 12.5743 9.00508 12.9131 9.47558C13.2739 9.97668 13.4 10.596 13.4 11H14.6C14.6 10.404 14.4261 9.52332 13.8869 8.77442C13.3257 7.99492 12.3956 7.4 11 7.4V8.6ZM13.4 11C13.4 12.0044 12.9949 12.5743 12.5244 12.9131C12.0233 13.2739 11.404 13.4 11 13.4V14.6C11.596 14.6 12.4767 14.4261 13.2256 13.8869C14.0051 13.3257 14.6 12.3956 14.6 11H13.4ZM11 13.4C9.99555 13.4 9.42568 12.9949 9.08692 12.5244C8.72613 12.0233 8.6 11.404 8.6 11H7.4C7.4 11.596 7.57387 12.4767 8.11308 13.2256C8.67432 14.0051 9.60445 14.6 11 14.6V13.4ZM8.6 11C8.6 9.99555 9.00508 9.42568 9.47558 9.08692C9.97668 8.72613 10.596 8.6 11 8.6V7.4C10.404 7.4 9.52332 7.57387 8.77442 8.11308C7.99492 8.67432 7.4 9.60445 7.4 11H8.6ZM13.0757 13.9243L16.0757 16.9243L16.9243 16.0757L13.9243 13.0757L13.0757 13.9243Z" fill={$props.fill}/><path d="M5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V19.5C19 20.0523 18.5523 20.5 18 20.5H6C5.44772 20.5 5 20.0523 5 19.5Z" stroke={$props.stroke} stroke-width={$props.strokeWidth}/>
        </g>
      </defs>
    )
  }
})

export { SearchFile }
  