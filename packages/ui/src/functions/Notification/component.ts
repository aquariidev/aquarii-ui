import {
  CreateElement,
  VNode
} from 'vue';
import {
  Component,
  Vue
} from 'vue-property-decorator';
import AQIcon from '../../components/Icon/AQIcon';

@Component
export default class AQNotification extends Vue {
  isShow = false;
  title = '';
  message = '';
  status = 'success';
  timeOut = 5000;

  /** Mounted */
  mounted(): void {
    this.isShow = true;
    setTimeout(() => {
      this.close();
    }, this.timeOut);
  }

  /** Close Notification */
  close(): void {
    this.isShow = false;

    const parent = this.$el.parentElement;

    if (parent) {
      setTimeout(() => {
        parent.removeChild(this.$el);
        this.$destroy();

        if(!parent.childNodes.length) {
          parent.remove();
        }
      }, 250);
    }
  }

  /** Computed notification class */
  get notificationClass() {
    switch (this.status) {
      case 'danger':
        return 'bg-red-100';
      case 'success':
        return 'bg-white';
      default:
        return 'bg-white';
    }
  }

  /** Render element */
  public render(h: CreateElement): VNode {
    const title = h('p', {
      class: 'text-sm leading-5 font-medium text-gray-900',
      domProps: {
        innerHTML: this.title,
      }
    });

    const message = h('p', {
      class: `${this.title ? 'mt-1' : ''} text-sm leading-5 text-gray-500`,
      domProps: {
        innerHTML: this.message
      }
    })

    const body = h('div', {
      class: 'ml-3 w-0 flex-1 pt-0.5'
    }, [
      title, message
    ]);

    const closeButton = h('button', {
      class: 'inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150',
      on: {
        click: this.close
      }
    }, [
      h(AQIcon, {
        props: {
          name: 'x'
        }
      })
    ])

    const closeButtonContent = h('div', {
      class: 'ml-4 flex-shrink-0 flex'
    }, [closeButton])

    const innerDialog = h('div', {
      class: 'rounded-lg shadow-xs overflow-hidden p-4 flex items-start',
      key: Math.random().toString(),
    }, [body, closeButtonContent])

    // const dialog = h('div', {
    //   staticClass: 'aq-dialog',
      // class: this.notificationClass,
      // key: Math.random().toString()
    // }, [innerDialog]);

    return h('transition-group', {
      tag: 'div',
      staticClass: 'aq-dialog',
      class: this.notificationClass,
      props: {
        'enter-active-class': 'transform ease-out duration-300 transition',
        'enter-class': 'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2',
        'enter-to-class': 'translate-y-0 opacity-100 sm:translate-x-0',
        'leave-active-class': 'transition ease-in duration-100',
        'leave-class': 'opacity-100',
        'leave-to-class': 'opacity-0',
      }
    }, [this.isShow && innerDialog])
  }
}