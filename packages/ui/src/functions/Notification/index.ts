import Vue from 'vue';
import AQNotification from './component';
import ParamsInteface from './param.interface';

const Notification = Vue.extend(AQNotification);

export default function(params: ParamsInteface): any {
  const instance = new Notification();

  instance.$data.title = params.title;
  instance.$data.message = params.message;
  instance.$data.status = params.status;

  const parent: HTMLElement =
    document.querySelector(`.aq-notification`) || document.createElement('div');

  if(!parent.classList.contains('aq-notification')) {
    parent.className = 'aq-notification';
  }

  parent.appendChild(instance.$mount().$el);
  document.body.appendChild(parent);

  Vue.nextTick(() => {
    instance.$data.isShow = true;
  });

  return instance;
}