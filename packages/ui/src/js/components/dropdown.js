import { seek, onClickOutside } from '../utils/observe';
import { toggle, leave } from '../utils/transition';

export default {
    name: 'dropdown',
    selector: '.aq-dropdown',
    handler: {
        /**
         *
         * @param {HTMLElement} el
         */
        bind(el) {
            let toggler = el.parentNode.firstChild;

            el.addEventListener('click', function(e) {
                e.stopPropagation()
            })

            if(toggler) {
                toggler.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    closeAllDropdown( seek('.aq-dropdown'), el)


                    toggle(el, { transitionName: 'aq-dropdown' });
                    el.style.left = dropdownPosition(toggler, el);
                });

                onClickOutside(el, () => {
                    leave(el, { transitionName: 'aq-dropdown'});
                })
            }
        }
    }
}
/**
 *
 * @param {Array<HTMLElement>} elements
 */
function closeAllDropdown(elements, el) {
    elements.filter(elem => !elem.isEqualNode(el) ).forEach(elem => {
        elem.classList.add('hidden');
    })
}

/**
 *
 * @param {HTMLElement} toggler
 * @param {HTMLElement} el
 * @return {string|null}
 */
function dropdownPosition(toggler, el) {
    let width = 192;
    let rect = toggler.getBoundingClientRect();

    if(el.classList.contains('hidden')) {
        return null;
    }

    return `${rect.left - el.offsetParent.offsetLeft - width + rect.width}px`;
}