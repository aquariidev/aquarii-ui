import { Component, Prop } from 'vue-property-decorator';
import AQComponent from './component';

@Component
export default class Activable extends AQComponent {
  @Prop({required: false}) value: any;
  isActive = false;

   /** Activator */
  getActivator() {
    if(this.$scopedSlots.activator) {
      return this.$scopedSlots.activator({
        attrs: {
          ...this.$attrs,
          role: 'button',
          type: 'button',
          'aria-expanded': String(this.isActive),
          'aria-haspopup': 'true',
        },
        on: {
          click: (e: any) => {
            e.stopPropagation();
            this.isActive = !this.isActive;
          }
        }
      });
    }
  }
}