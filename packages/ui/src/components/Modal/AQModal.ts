import { CreateElement, VNode } from 'vue';
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import Activable from '../../mixins/activable.mixin';
import AQComponent from '../../mixins/component';
import { onClickOutside } from '../../util/click-outside';
import AQIcon from '../Icon/AQIcon';

@Component({name: 'aq-modal'})
export default class AQModal extends Mixins(Activable, AQComponent) {
  @Prop({default: false, type: Boolean}) value: any;
  @Prop({required: false, type: Boolean}) closeable?: boolean;
  @Prop({required: false, type: Boolean, default: true}) bgClose?: boolean;
  @Prop({required: false}) full: any;

  propsWithoutValue = ['full'];

  /** Computed modal class */
  get modalClass() {
    const classes = [];

    classes.push(...this.getPropsWithoutValue());

    return classes.join(' ');
  }

  @Watch('value')
  watchValue(value: boolean) {
    this.isActive = value;

    if(document) {
      document.body.classList[value ? 'add': 'remove']('aq-modal-page');
    }
  }

  @Watch('isActive')
  watchIsActive(value: boolean) {
    this.$emit('input', value);
  }

  mounted(): void {
    if(this.bgClose) {
      onClickOutside(this.$refs.dialog, () => {
        this.isActive = false;
      });
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
          click: () => this.isActive = false,
        }
      }, [
        h(AQIcon, {
          props: {
            name: 'x'
          }
        })
      ])
    ]);

    const dialog = h('transition', {
      props: {
        name: 'aq-modal-dialog'
      }
    }, [
      h('div', {
        staticClass: 'aq-dialog',
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
    ]);

    const modal = h('transition', {
      props: {
        name: 'aq-modal'
      }
    }, [
      h('div', {
        staticClass: 'aq-modal',
        class: this.modalClass,
        directives: [directive],
      }, [
        dialog
      ])
    ]);

    return h('div', [
      this.getActivator(),
      modal
    ]);
  }
}