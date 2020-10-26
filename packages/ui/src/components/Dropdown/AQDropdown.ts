import { CreateElement } from 'vue'
import { Vue, Component } from 'vue-property-decorator'
import { onClickOutside } from '../../util/click-outside';

@Component({name: 'aq-dropdown'})
export default class AQDropdown extends Vue {
  isActive = false;

  /** When component mounted */
  mounted() {
    onClickOutside(this.$el, () => this.isActive = false);
  }

  /** Activator */
  getActivator() {
    if(this.$scopedSlots.activator) {
      return this.$scopedSlots.activator({
        attrs: {
          ...this.$attrs
        },
        on: {
          click: (e: any) => {
            this.isActive = !this.isActive;
          }
        }
      });
    }

    throw new Error('No activator provided, try <template #activator="{on}"></template> inside dropdown component')
  }

  public render(h: CreateElement): any {
    const nav = h('div', {
      staticClass: 'nav',
    }, this.$slots.default);

    const dropdown = h('div', {
      staticClass: 'aq-dropdown',
      ref: 'dropdown',
      attrs: {
        ...this.$attrs,
        'aria-orientation': 'vertical',
        role: 'menu',
      },
      directives: [
        {
          name: 'show',
          value: this.isActive
        },
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
    ]);

    return h('div', {

    }, [
      this.getActivator(),
      transition
    ]);
  }
}