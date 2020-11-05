import { CreateElement, VNode } from 'vue';
import { Component, Prop, Mixins } from 'vue-property-decorator';
import AQComponent from '../../mixins/component';

@Component({name: 'aq-radio'})
export default class AQRadio extends Mixins(AQComponent) {
  @Prop({required: false}) value: any;
  @Prop({required: false}) label: any;
  @Prop({required: false}) id: any;

  /** Render element */
  public render(h: CreateElement): VNode {
    const label = h('label', {
      attrs: {
       for: this.id || this.value.replace(' ','')
      },
      domProps: {
        innerText: this.label
      }
    })

    const radio = h('input', {
      staticClass: 'aq-radio-input',
      domProps: {
        value: this.value
      },
      attrs: {
        ...this.$attrs,
        id: this.id || this.value.replace(' ',''),
        name: this.$parent.$props['name'],
        type: 'radio',
        'checked': this.value === this.$parent.$props['value']
      },
      on: {
        ...this.$listeners,
        input: () => {
          this.$parent.$emit('input', this.value);
        }
      }
    })

    return h('div', {
      staticClass: 'aq-radio'
    }, [
      radio,
      this.label && label,
    ])
  }
}