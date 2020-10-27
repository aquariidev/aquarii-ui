import { Component, Prop } from 'vue-property-decorator';
import AQComponent from './component';

@Component
export default class FormMixin extends AQComponent {
  @Prop({required: false, type: String}) label: any;

  /** Label element */
  getLabel() {
    if(this.label) {
      return this.$createElement('label', {
        domProps: {
          innerHTML: this.label
        }
      })
    }
  }

  /** Message element */
  getMessage(type?: string) {
    const defaultMessage = this.$slots.message;

    const message = this.$slots[`message-${type}`];

    if(defaultMessage || message) {
      return this.$createElement('p', {
        staticClass: 'message'
      }, type ? message : defaultMessage);
    }
  }
}