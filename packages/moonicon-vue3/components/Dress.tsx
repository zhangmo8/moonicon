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

const Dress = defineComponent({
  name: 'Dress',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Dress">
          <path d="M9.49994 10.75H14.4999" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.4998 3.5L13.6664 6.16667" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.49994 3.5L10.3333 6.16667" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.49978 9.77694C9.49978 9.5957 9.45052 9.41786 9.35727 9.26245L8.40847 7.68112C8.00856 7.0146 8.48867 6.16663 9.26596 6.16663H14.7336C15.5109 6.16663 15.991 7.0146 15.5911 7.68112L14.6423 9.26245C14.549 9.41786 14.4998 9.5957 14.4998 9.77694V11.7534C14.4998 11.9154 14.5391 12.0749 14.6144 12.2182L18.1057 18.8685C18.4553 19.5343 17.9724 20.3333 17.2203 20.3333H6.60771C5.84711 20.3333 5.36495 19.5178 5.7315 18.8514L9.37599 12.225C9.4572 12.0774 9.49978 11.9116 9.49978 11.7431V9.77694Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Dress }
  