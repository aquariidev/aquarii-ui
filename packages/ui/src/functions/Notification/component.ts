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
  icon = null;
  timeout = 5000;
  pos = 'top-right';

  /** Mounted */
  mounted(): void {
    this.isShow = true;

    if(this.timeout) {
      setTimeout(() => {
        this.close();
      }, this.timeout);
    }
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
    const title = h('div', {
      class: 'aq-title',
      domProps: {
        innerHTML: this.title,
      }
    });

    const icon = h('div', {
      staticClass: 'aq-icon-content'
    }, [
      h(AQIcon, {
        props: {
          name: this.icon
        }
      })
    ])

    const message = h('p', {
      class: 'aq-message',
      domProps: {
        innerHTML: this.message
      }
    })

    const body = h('div', {
      class: 'aq-body'
    }, [
      this.title && title,
      message
    ]);

    const closeButton = h('button', {
      class: 'aq-close',
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
      class: 'aq-close-content'
    }, [closeButton])

    const innerDialog = h('div', {
      class: 'aq-inner-dialog',
      key: Math.random().toString(),
    }, [
      this.icon && icon,
      body,
      closeButtonContent])

    const dialog = h('div', {
      staticClass: 'aq-dialog',
      class: this.notificationClass,
      key: Math.random().toString()
    }, [innerDialog]);

    return h('transition', {
      props: {
        name: 'aq-notification'
      }
    }, [this.isShow && dialog])
  }
}