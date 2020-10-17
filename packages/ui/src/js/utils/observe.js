/**
 * Registered selectors to observe
 * @type {Object<string, Object>}
 */
const registry = {}

/**
 * Walk DOM to bind/unbind elements based on selector
 */
function tick() {
	let a = 0, r = 0, p = performance.now()
	for(let selector in registry) {

		// bind new elements
		const els = document.querySelectorAll(selector)
		for(let i = 0; i < els.length; i++) {
			if(registry[selector].els.indexOf(els[i]) === -1) {
				if(registry[selector].bind(els[i]) !== false) { // reject binding if true
					registry[selector].els.push(els[i])
					a++
				}
			}
		}

		// unbind deleted elements (optional)
		if(!registry[selector].unbind) continue;
		for(let i = registry[selector].els.length; i--;) {
			if(!registry[selector].els[i].isConnected) {
				registry[selector].unbind(registry[selector].els[i])
				registry[selector].els.splice(i, 1)
				r++
			}
		}
	}

	// log performance
	if(a + r) {
		const ellapsed = (performance.now() - p).toFixed(2)
		console.debug(`# tick +${a} -${r} in ${ellapsed}ms`)
	}
}


/**
 * Observe DOM and run tick() each time an element is added or removed
 * @type {MutationObserver}
 */
let observing = false
function startObserver() {
	const obs = new MutationObserver(tick)
	obs.observe(document, { childList: true, subtree: true })
}


/**
 * Register selector
 * @param {String} selector - valid css query selector
 * @param {Object} bindings - callbacks
 * @param {Function} bindings.bind - callback when the element is added to the DOM
 * @param {Function} bindings.unbind - optional callback when the element is removed from the DOM
 */
export default function observe(selector, { bind, unbind }) {
	if(!registry[selector]) {

		// start observer once
		if(!observing) startObserver()

		// register selector
		console.debug(`# observe ${selector}`)
		registry[selector] = { els: [], bind, unbind }

		// force tick
		tick()
	}
}


/**
 * Unbind element from its selectors
 * @param {HTMLElement} el
 */
export function unbind(el) {
	for(let selector in registry) {
		const index = registry[selector].els.indexOf(el)
		if(index !== -1) {
			registry[selector].unbind(registry[selector].els[index])
			registry[selector].els.splice(index, 1)
		}
	}
}


/**
 * Unbind selector's elements and delete entry
 * @param {String} selector
 */
export function unobserve(selector) {
	if(selector in registry) {

		// unbind children
		for(let i = registry[selector].els.length; i--;) {
			registry[selector].unbind(registry[selector].els[i])
		}

		// delete entry
		// console.debug(`# unobserve ${selector}`)
		delete registry[selector]
	}
}


/**
 * Get selector's elements
 * @param {String} selector
 * @return {Array<HTMLElement>}
 */
export function seek(selector) {
	return (selector in registry) ? registry[selector].els : []
}


export function onClickOutside(el, cb) {

    // make a event handler for click event
    const event = function (e) {
      var itsChildren = el.contains(e.target);
      if(e.target != el && !itsChildren) {
        return cb ? cb() : null;
      }
    };

    // Attach Event Listener to body
    document.addEventListener('click', event, false);
}