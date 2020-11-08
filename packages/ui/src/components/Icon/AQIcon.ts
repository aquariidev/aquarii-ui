import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import AQComponent from '../../mixins/component';
import Icons from '../../util/icons';

@Component({name: 'aq-icon'})
export default class AQIcon extends AQComponent {
  @Prop({required: true, type: String}) name!: string;

  /** Get component by given default slot */
  getIconPath() {
    const icon = Icons.find(icon => icon.name == this.name);

    const stroke = {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
    }

    if(!icon) {
      throw new Error('Icon cannot be found');
    }

    if(Array.isArray(icon.d)) {
      return icon.d.map(data => this.$createElement('path', {
        attrs: {
          ...stroke,
          d: data
        }
      }))
    }

    return this.$createElement('path', {
      attrs: {
        ...stroke,
        d: icon.d
      }
    });
  }

  public render(h: CreateElement): VNode {
    const svg = h('svg', {
      staticClass: 'aq-icon',
      attrs: {
        ...this.$attrs,
        fill:'none',
        stroke: 'currentColor',
        viewBox: '0 0 24 24',
        xmlns: 'http://www.w3.org/2000/svg'
      }
    }, [this.getIconPath()]);

    return svg;
  }
}