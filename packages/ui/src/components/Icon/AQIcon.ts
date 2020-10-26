import { CreateElement, VNode } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Icons from '../../util/icons';

@Component({name: 'aq-icon'})
export default class AQIcon extends Vue {
  @Prop({required: true, type: String}) name!: string;

  /** Get component by given default slot */
  getIconPath() {
    const icon = Icons.find(icon => icon.name == this.name);

    if(!icon) {
      throw new Error('Icon cannot be found');
    }

    return this.$createElement('path', {
      attrs: {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: icon.d
      }
    })
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