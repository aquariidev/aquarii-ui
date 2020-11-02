import Vue from 'vue';
import AQNotification from './component';
import ParamsInteface from './param.interface';

const Notification = Vue.extend(AQNotification);

export default function(params: ParamsInteface): any {
  const instance = new Notification();

  for(let [key, value] of Object.entries(params)) {
    if(value !== undefined) {
      instance.$data[key] = value;

      if(key === 'pos') {
        instance.$data[key] = `aq-${value}`;
      }
    }
  }

  const selector = `.aq-notification.${instance.$data.pos}`;

  const parent: HTMLElement =
    document.querySelector(selector) || document.createElement('div');

  if(!parent.classList.contains(selector)) {
    parent.className = `aq-notification ${instance.$data.pos}`;
  }

  parent.appendChild(instance.$mount().$el);
  document.body.appendChild(parent);

  Vue.nextTick(() => {
    instance.$data.isShow = true;
  });

  return instance;
}