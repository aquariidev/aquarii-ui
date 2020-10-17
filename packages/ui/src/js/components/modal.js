import { onClickOutside } from '../observe';
import { leave } from '../transition';

export default {
    name: 'modal',
    selector: '.aq-modal',
    handler: {
        /**
         *
         * @param {HTMLElement} el
         */
        bind(el) {
            let dialog = el.querySelector('.dialog');

            if(dialog) {
                onClickOutside(dialog, function() {
                    if (el.style.display) {
                        leave(el, {toggleType: 'display'});
                        leave(dialog, {toggleType: 'display'});
                    }
                })
            }
        }
    }
}