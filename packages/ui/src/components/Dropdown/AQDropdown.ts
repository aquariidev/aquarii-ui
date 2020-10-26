import { CreateElement } from 'vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({name: 'aq-dropdown'})
export default class AQDropdown extends Vue {
  isActive = false;

  public render(h: CreateElement): any {
    const nav = h('div', {
      staticClass: 'nav'
    }, this.$slots.default);

    const dropdown = h('div', {
      staticClass: 'aq-dropdown',
      ref: 'dropdown',
      directives: [
        {
          name: 'show',
          value: this.isActive
        }
      ]
    }, [
      nav
    ]);

    const transition = h('transition', {
      props: {
        name: 'aq-dropdown'
      }
    }, [
      dropdown
    ])

    return h('div', {

    }, [
      this.$scopedSlots.activator({
        attrs: {
          ...this.$attrs
        },
        on: {
          click: (e: any) => {
            this.isActive = !this.isActive;
          }
        }
      }),
      transition
    ]);
  }
}