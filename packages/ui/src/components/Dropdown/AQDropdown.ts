import { CreateElement, VNode } from 'vue'
import { Component } from 'vue-property-decorator'
import AQComponent from '../../mixins/component';
import { onClickOutside } from '../../util/click-outside';

@Component({name: 'aq-dropdown'})
export default class AQDropdown extends AQComponent {
  isActive = false;

  /** When component mounted */
  mounted(): void {
    onClickOutside(this.$el, () => this.isActive = false);
  }

  /** Activator */
  getActivator() {
    if(this.$scopedSlots.activator) {
      return this.$scopedSlots.activator({
        attrs: {
          ...this.$attrs,
          role: 'button',
          type: 'button',
          'aria-expanded': this.isActive ? 'true' : 'false',
          'aria-haspopup': 'true',
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

  public render(h: CreateElement): VNode {
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
      staticClass: 'inline-block'
    }, [
      this.getActivator(),
      transition
    ]);
  }
}