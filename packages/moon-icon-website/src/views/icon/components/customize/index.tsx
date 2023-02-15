import styles from './index.module.scss'
import { NForm, NFormItem, NSlider, NColorPicker, NButton } from 'naive-ui'
import { WritableComputedRef } from 'vue'
import { Customize } from '@/store/icons/types'
import { defaultCustomize, useIconsStore } from '@/store/icons'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Customize',
  setup() {
    const iconStore = useIconsStore()

    const customizeFields: Array<keyof Customize> = [
      'size',
      'strokeWidth',
      'stroke',
      'fill'
    ]

    const customizeSize: WritableComputedRef<Customize['size']> = computed({
      get: () => iconStore.getCustomize.size,
      set: (val: Customize['size']) => iconStore.setCustomize('size', val)
    })

    const customizeStrokeWidth: WritableComputedRef<Customize['strokeWidth']> =
      computed({
        get: () => iconStore.getCustomize.strokeWidth,
        set: (val: Customize['strokeWidth']) =>
          iconStore.setCustomize('strokeWidth', val)
      })

    const customizeStroke: WritableComputedRef<Customize['stroke']> = computed({
      get: () => iconStore.getCustomize.stroke,
      set: (val: Customize['stroke']) => iconStore.setCustomize('stroke', val)
    })

    const customizeFill: WritableComputedRef<Customize['fill']> = computed({
      get: () => iconStore.getCustomize.fill,
      set: (val: Customize['fill']) =>
        iconStore.setCustomize('fill', val || 'none')
    })

    const resetCustomize = () => {
      for (const key of customizeFields) {
        iconStore.setCustomize(key, defaultCustomize[key])
      }
    }

    return {
      customizeSize,
      customizeStrokeWidth,
      customizeStroke,
      customizeFill,
      resetCustomize
    }
  },
  render() {
    const { t } = useI18n()
    return (
      <div class={styles.iconCustomize}>
        <NForm size='large'>
          <NFormItem
            label={t('customize.size')}
            labelStyle={{ fontSize: '16px' }}
          >
            <div class={styles.mInlineFlex}>
              <NSlider
                min={12}
                max={72}
                step={1}
                v-model={[this.customizeSize, 'value']}
              />
              <div class={styles.mInlineLabel}>
                {this.customizeSize === null ? '' : this.customizeSize + 'px'}
              </div>
            </div>
          </NFormItem>
          <NFormItem
            label={t('customize.strokeWidth')}
            labelStyle={{ fontSize: '16px' }}
          >
            <div class={styles.mInlineFlex}>
              <NSlider
                min={0.4}
                max={4}
                step={0.1}
                v-model={[this.customizeStrokeWidth, 'value']}
              />
              <div class={styles.mInlineLabel}>
                {this.customizeStrokeWidth === null
                  ? ''
                  : this.customizeStrokeWidth + 'px'}
              </div>
              {/*<NInputNumber*/}
              {/*  min={0.4}*/}
              {/*  max={4}*/}
              {/*  step={0.1}*/}
              {/*  v-model={[this.customizeStrokeWidth, 'value']}*/}
              {/*  format={(val) => (val === null ? '' : val + 'px')}*/}
              {/*></NInputNumber>*/}
            </div>
          </NFormItem>
          <NFormItem
            label={t('customize.stroke')}
            labelStyle={{ fontSize: '16px' }}
          >
            <NColorPicker v-model={[this.customizeStroke, 'value']} />
          </NFormItem>
          <NFormItem
            label={t('customize.fill')}
            labelStyle={{ fontSize: '16px' }}
          >
            <NColorPicker v-model={[this.customizeFill, 'value']} />
          </NFormItem>
          <NButton size='large' class='m-block' onClick={this.resetCustomize}>
            {t('customize.reset')}
          </NButton>
        </NForm>
      </div>
    )
  }
})
