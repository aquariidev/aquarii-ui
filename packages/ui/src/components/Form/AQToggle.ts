import { CreateElement, VNode } from 'vue';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import AQIcon from '../Icon/AQIcon';

@Component({name: 'aq-toggle'})
export default class AQToggle extends Vue {
  @Prop({required: false, type: Boolean}) value: any;
  @Prop({required: false, type: String}) onIcon: any;
  @Prop({required: false, type: String}) offIcon: any;
  @Prop({required: false}) color: any;

  mounted() {
    this.setCustomColor();
  }

  @Watch('value')
  watchValue() {
    this.setCustomColor();
  }

  /** Set toggle ref when color available and value is true */
  private setCustomColor(): void {
    if(this.$refs.toggle && this.color) {
      (this.$refs.toggle as HTMLElement).style.backgroundColor = this.value ? this.color : '';
    }
  }

  /** Check if color props is not inside colors property */
  private isCustomColor(): any {
    return !this.colors.includes(this.color);
  }

  /** Computed colors property */
  get colors() {
    return ['danger', 'warning', 'success'];
  }

  /** Computed toggleClass */
  get toggleClass() {
    const classes = [];

    if(this.color && !this.isCustomColor()) {
      classes.push(`aq-${this.color}`);
    }

    classes.push(this.value ? 'aq-toggle-on' : 'aq-toggle-off');

    return classes.join(' ');
  }

  /** Render element */
  public render(h: CreateElement): VNode {
    const onIcon = h(AQIcon, {
      props: {
        name: this.onIcon
      }
    });

    const offIcon = h(AQIcon, {
      props: {
        name: this.offIcon
      }
    });

    const icon = h('span', {
      staticClass: 'aq-toggle-icon'
    }, [
      (this.value && this.onIcon) && onIcon,
      (!this.value && this.offIcon) && offIcon,
    ])

    const toggleCircle = h('span', {
      staticClass: 'aq-toggle-circle',
      attrs: {
        'aria-hidden': 'true'
      },
    }, [
      (this.onIcon || this.offIcon) && icon,
      this.$slots.offText,
      this.$slots.onText
    ]);

    return h('span', {
      staticClass: 'aq-toggle',
      class: this.toggleClass,
      ref: 'toggle',
      on: {
        click: (e: any) => this.$emit('input', !this.value)
      },
      attrs: {
        role: 'checkbox',
        tabindex: '0',
        'aria-checked': String(this.value)
      }
    }, [
      toggleCircle
    ]);
  }
}