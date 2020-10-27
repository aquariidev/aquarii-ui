import { CreateElement, VNode } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AQLoading extends Vue {
  @Prop({required: false}) inline: any;

  /** Render the component */
  public render(h: CreateElement): VNode {
    const circle = h('circle', {
      staticClass: 'opacity-25',
      attrs: {
        'stroke-width': '4',
        cx: '12',
        cy: '12',
        r: '10',
        stroke: 'currentColor',
      }
    });

    const path = h('path', {
      staticClass: 'opacity-75',
      attrs: {
        fill: 'currentColor',
        d: `M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`,
      }
    })

    return h('svg', {
      class: 'animate-spin h-5 w-5 mr-3',
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24'
      }
    }, [circle, path])
  }
}