/**
 *
 * @param {HTMLElement} element
 * @param {*} transitionName
 * @param {*} toggleClass
 * @param {*} toggleType
 */
export async function enter(element, {transitionName = null, toggleClass = 'hidden', toggleType = 'class', displayType = 'block'}) {
    if(toggleType == 'class') {
        element.classList.remove(toggleClass)
    } else {
        element.style.display = displayType;
    }

    await transition('enter', element, transitionName)
}

export async function leave(element, {transitionName = null, toggleClass = 'hidden', toggleType = 'class', displayType = 'block'}) {
    await transition('leave', element, transitionName)

    if(toggleType == 'class') {
        element.classList.add(toggleClass)
    } else {
        element.style.display = null;
    }
}

/**
 *
 * @param {*} element
 * @param {*} param1
 */
export async function toggle(element, {transitionName = null, toggleClass = 'hidden', toggleType = 'class', displayType = 'block'}) {
    if (element.classList.contains(toggleClass) || (toggleType == 'display' && !element.style.display)) {
        await enter(element, {transitionName, toggleClass, toggleType, displayType})
    } else {
        await leave(element, {transitionName, toggleClass, toggleType, displayType})
    }
}

async function transition(direction, element, animation) {
    const dataset = element.dataset
    const animationClass = animation ? `${animation}-${direction}` : direction
    let transition = `transition${direction.charAt(0).toUpperCase() + direction.slice(1)}`
    const genesis = dataset[transition] ? dataset[transition].split(" ") : [animationClass]
    const start = dataset[`${transition}Start`] ? dataset[`${transition}Start`].split(" ") : [`${animationClass}-start`]
    const end = dataset[`${transition}End`] ? dataset[`${transition}End`].split(" ") : [`${animationClass}-end`]

    addClasses(element, genesis)
    addClasses(element, start)
    await nextFrame()
    removeClasses(element, start)
    addClasses(element, end);
    await afterTransition(element)
    removeClasses(element, end)
    removeClasses(element, genesis)
}

function addClasses(element, classes) {
    element.classList.add(...classes)
}

function removeClasses(element, classes) {
    element.classList.remove(...classes)
}

function nextFrame() {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            requestAnimationFrame(resolve)
        });
    });
}

function afterTransition(element) {
    return new Promise(resolve => {
        // safari return string with comma separate values
        const computedDuration = getComputedStyle(element).transitionDuration.split(",")[0]
        const duration = Number(computedDuration.replace('s', '')) * 1000;
        setTimeout(() => {
            resolve()
        }, duration)
    });
}