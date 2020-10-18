import { toggle } from '../utils/transition';

export default {
    name: 'toggle',
    selector: '[aq-toggle]',
    handler: {
        bind: (el) => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();

                let attr = el.getAttribute('aq-toggle');

                let toggleElement = document.querySelector(attr);

                if(toggleElement) {
                    controlToggle(toggleElement);
                }
            })
        }
    }
}

/**
 * @param {HTMLElement} el
 */
function controlToggle(el) {
    if(el.classList.contains('aq-modal')) {
        const dialog = el.querySelector('.dialog');

        toggle(el, { toggleType: 'display',displayType: 'flex' })
        toggle(dialog, { toggleType: 'display', displayType: 'inline-block' });
    } else {
        toggle(el, {});
    }
}