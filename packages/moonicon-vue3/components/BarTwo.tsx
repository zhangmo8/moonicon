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

const BarTwo = defineComponent({
  name: 'BarTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="BarTwo">
          <path d="M7.30923 5.23083L4.80752 12.2111M16.6906 5.23083L19.1924 12.2111M11.9999 17.4463C12.7678 17.4463 14.0742 17.5752 14.7857 18.0136C15.234 18.2898 15.693 18.7893 16.2181 18.7502C18.3996 18.5878 21.1349 17.328 19.5051 13.0837L19.1924 12.2111M11.9999 17.4463C10.5563 17.4463 9.70772 17.7099 9.23615 18.0197C8.79608 18.3088 8.30689 18.7893 7.78178 18.7502C5.60032 18.5878 2.86499 17.328 4.49481 13.0837L4.80752 12.2111M11.9999 17.4463C11.9999 16.0503 13.9364 13.1634 15.4999 12C17.001 10.6039 18.9839 11.6294 19.1924 12.2111M11.9999 17.4463C11.9999 16.3993 10.0635 13.3088 8.49994 12C6.99891 10.6039 5.016 11.6294 4.80752 12.2111M11.9999 17.4463C9.60247 17.1555 4.80752 15.7013 4.80752 12.2111M11.9999 17.4463C14.3974 16.5738 19.1924 14.3052 19.1924 12.2111" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { BarTwo }
  