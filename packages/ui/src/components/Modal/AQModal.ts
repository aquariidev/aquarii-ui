import { CreateElement, VNode } from 'vue';
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import Activable from '../../mixins/activable.mixin';
import { onClickOutside } from '../../util/click-outside';
import AQIcon from '../Icon/AQIcon';

@Component({name: 'aq-modal'})
export default class AQModal extends Mixins(Activable) {
  @Prop({required: false, type: Boolean}) closeable?: boolean;
  @Prop({required: false, type: Boolean, default: true}) bgClose?: boolean;

  @Watch('isActive')
  onIsActiveChange(value: boolean, oldValue: boolean) {
    if(document) {
      document.body.classList[value ? 'add': 'remove']('aq-modal-page');
    }
  }

  mounted(): void {
    if(this.bgClose) {
      onClickOutside(this.$refs.dialog, () => this.isActive = false);
    }
  }

  public render(h: CreateElement): VNode {
    const directive = {
      name: 'show',
      value: this.isActive
    };

    const closeButton = h('div', {
      staticClass: 'aq-close'
    }, [
      h('button', {
        staticClass: 'aq-close-button',
        attrs: {
          'aria-label': 'Close',
          type: 'button'
        },
        on: {
          click: () => this.isActive = false
        }
      }, [
        h(AQIcon, {
          props: {
            name: 'x'
          }
        })
      ])
    ])

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
      }, [
        this.closeable && closeButton,
        this.$slots.default
      ])
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