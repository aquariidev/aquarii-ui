import { CreateElement, VNode } from 'vue'
import { Component, Mixins } from 'vue-property-decorator'
import Activable from '../../mixins/activable.mixin';
import { onClickOutside } from '../../util/click-outside';

@Component({name: 'aq-dropdown'})
export default class AQDropdown extends Mixins(Activable) {
  /** When component mounted */
  mounted(): void {
    onClickOutside(this.$el, () => this.isActive = false);
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