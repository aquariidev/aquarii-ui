import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import AQComponent from '../../mixins/component';

@Component({name: 'aq-card-media'})
export default class AQCardMedia extends AQComponent {
  public render(h: CreateElement): VNode {
    return h('div', {
      staticClass: 'media',
      slot: 'media-top'
    }, this.$slots.default);
  }
}