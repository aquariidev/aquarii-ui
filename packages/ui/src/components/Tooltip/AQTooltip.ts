import { CreateElement, VNode } from 'vue';
import { Component, Mixins, Prop, Vue } from 'vue-property-decorator';
import { insertElement } from '../../util';

@Component({name: 'aq-tooltip'})
export default class AQTooltip extends Vue {
  @Prop({required: false}) value?: boolean;
  @Prop({required: false}) title?: string;
  @Prop({required: false, default: 'top'}) pos?:string;
  @Prop({required: false, default: true}) hover?: boolean;

  isOpen = false;

  toggleTooltip(value: boolean) {
    this.isOpen = value;

    this.$nextTick(() => {
      const tooltip = this.$refs.tooltip as HTMLElement;

      if(tooltip) insertElement(tooltip);

      if(value) this.setToolTipPosition(tooltip, this.$refs.content as HTMLElement);
    })
  }

  setToolTipPosition(tooltip: HTMLElement, content: HTMLElement) {
    const tooltipRect = tooltip.getBoundingClientRect();
    const rect = content.getBoundingClientRect();

    const w = tooltipRect.width - rect.width;

    const top = rect.top + window.pageYOffset;

    tooltip.style.left = `${rect.left - (w / 2)}px`;

    switch (this.pos) {
      case 'bottom':
        tooltip.style.top = `${top + rect.height + 5}px`;
        break;
      case 'left':
        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${rect.left - tooltipRect.width - 12}px`;
        break;
      case 'right':
        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${rect.left + tooltipRect.width}px`;
      break;
      default:
        tooltip.style.top = `${top - rect.height}px`;
        break;
    }
  }

  /** Render Component */
  public render(h: CreateElement): VNode {
    const tooltip = h('div', {
      staticClass: 'aq-tooltip text-xs p-2 absolute rounded-md shadow-lg bg-teal-600 text-white origin-bottom',
      transition: {
        name: 'aq-tooltip'
      },
      domProps: {
        innerText: this.title,
      },
      ref: 'tooltip',
    }, [
      this.$slots.tooltip
    ]);

    const content = h('div', {
      staticClass: 'aq-tooltip-content inline-block',
      ref: 'content',
      on: {
        mouseenter: (e: any) => this.toggleTooltip(true),
        mouseleave: (e: any) => this.toggleTooltip(false),
      }
    }, [
      this.$slots.default,
      this.isOpen && tooltip
    ]);

    return content;
  }
}