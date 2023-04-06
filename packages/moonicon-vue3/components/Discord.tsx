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

const Discord = defineComponent({
  name: 'Discord',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Discord">
          <path d="M18.9308 5.26368C17.6561 4.67878 16.2892 4.24785 14.8599 4.00104C14.8339 3.99627 14.8079 4.00818 14.7945 4.03198C14.6187 4.34466 14.4239 4.75258 14.2876 5.0732C12.7503 4.84306 11.221 4.84306 9.71527 5.0732C9.57887 4.74545 9.37707 4.34466 9.20048 4.03198C9.18707 4.00897 9.16107 3.99707 9.13504 4.00104C7.70659 4.24706 6.33963 4.67799 5.06411 5.26368C5.05307 5.26844 5.04361 5.27638 5.03732 5.28669C2.44449 9.16033 1.73421 12.9387 2.08265 16.6703C2.08423 16.6886 2.09447 16.706 2.10867 16.7171C3.81934 17.9734 5.47642 18.7361 7.10273 19.2416C7.10273 19.2416 8.04055 17.6869 8.15989 17.4687C7.61594 17.2624 7.098 17.0108 6.59977 16.7251L7.07518 16.8738C8.68335 17.2539 13.8919 18.3682 17.1264 16.8738L17.3897 16.7251C16.8914 17.0163 16.3735 17.2624 15.8288 17.4679C15.9481 17.6856 16.8859 19.2416 16.8859 19.2416C18.5201 18.7361 20.1772 17.9734 21.8879 16.7171C21.9028 16.706 21.9123 16.6894 21.9139 16.6711C22.3309 12.357 21.2154 8.60957 18.9568 5.28748C18.9513 5.27638 18.9419 5.26844 18.9308 5.26368ZM8.68335 14.3982C7.69792 14.3982 6.88594 13.4935 6.88594 12.3824C6.88594 11.2713 7.68217 10.3666 8.68335 10.3666C9.69239 10.3666 10.4965 11.2793 10.4807 12.3824C10.4807 13.4935 9.68451 14.3982 8.68335 14.3982ZM15.329 14.3982C14.3435 14.3982 13.5316 13.4935 13.5316 12.3824C13.5316 11.2713 14.3278 10.3666 15.329 10.3666C16.338 10.3666 17.1421 11.2793 17.1264 12.3824C17.1264 13.4935 16.338 14.3982 15.329 14.3982Z" fill={$props.fill}/>
        </g>
      </defs>
    )
  }
})

export { Discord }
  