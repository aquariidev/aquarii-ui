import Aquarii from './api/index';
import boot from './boot';
import components from './components';

boot(components);

export default Aquarii;

window.Aquarii = Aquarii;