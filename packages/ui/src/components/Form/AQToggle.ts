import { CreateElement, VNode } from 'vue';
import { Component, Prop, Mixins } from 'vue-property-decorator';
import AQComponent from '../../mixins/component';
import AQIcon from '../Icon/AQIcon';

@Component({name: 'aq-toggle'})
export default class AQToggle extends Mixins(AQComponent) {
  @Prop({required: false, type: Boolean}) value: any;
  @Prop({required: false, type: String}) onIcon: any;
  @Prop({required: false, type: String}) offIcon: any;

  /** Computed toggleClass */
  get toggleClass() {
    const classes = [];

    classes.push(...this.getPropsWithoutValue());

    classes.push(this.value ? 'aq-toggle-on' : 'aq-toggle-off');

    return classes.join(' ');
  }

  /** Render element */
  public render(h: CreateElement): VNode {
    const onIcon = h(AQIcon, {
      props: {
        name: this.onIcon
      }
    })

    const offIcon = h(AQIcon, {
      props: {
        name: this.offIcon
      }
    });

    const icon = h('span', {
      staticClass: 'aq-toggle-icon'
    }, [
      (this.value && this.onIcon) && onIcon,
      (!this.value && this.offIcon) && offIcon,
    ])

    const toggleCircle = h('span', {
      staticClass: 'aq-toggle-circle',
      attrs: {
        'aria-hidden': 'true'
      },
    }, [
      (this.onIcon || this.offIcon) && icon,
      this.$slots.offText,
      this.$slots.onText
    ])

    return h('span', {
      staticClass: 'aq-toggle',
      class: this.toggleClass,
      on: {
        click: (e: any) => {
          this.$emit('input', !this.value);
        }
      },
      attrs: {
        role: 'checkbox',
        tabindex: '0',
        'aria-checked': String(this.value)
      }
    }, [
      toggleCircle
    ])
  }
}