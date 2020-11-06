import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Activable extends Vue {
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