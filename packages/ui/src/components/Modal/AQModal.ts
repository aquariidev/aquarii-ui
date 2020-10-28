import { CreateElement, VNode } from 'vue';
import { Component, Mixins } from 'vue-property-decorator';
import Activable from '../../mixins/activable.mixin';
import { onClickOutside } from '../../util/click-outside';

@Component({name: 'aq-modal'})
export default class AQModal extends Mixins(Activable) {
  mounted(): void {
    onClickOutside(this.$refs.dialog, () => this.isActive = false);
  }

  public render(h: CreateElement): VNode {
    const directive = {
      name: 'show',
      value: this.isActive
    };

    const dialog = h('transition', {
      props: {
        name: 'aq-modal-dialog'
      }
    }, [
      h('div', {
        staticClass: 'dialog',
        ref: 'dialog',
        attrs: {
          role: 'dialog',
          'aria-modal': 'true'
        },
        directives: [directive]
      }, this.$slots.default)
    ])

    const modal = h('transition', {
      props: {
        name: 'aq-modal'
      }
    }, [
      h('div', {
        staticClass: 'aq-modal',
        directives: [directive],
      }, [dialog])
    ])

    return h('div', [
      this.getActivator(),
      modal
    ])
  }
}