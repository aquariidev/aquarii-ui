import Instance from '../utils/instance';
import observe from '../utils/observe';

export default function (Aquarii) {
    Aquarii.component = function(name, options) {
        if(options.handler) {
            observe(options.selector, options.handler)
        }

        Aquarii[name] = function(selector) {
            return new Instance(selector);
        }
    }
}