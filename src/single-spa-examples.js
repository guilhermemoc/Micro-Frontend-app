import { declareChildApplication, start } from 'single-spa';
import 'babel-polyfill';
import '../src/shared/styles/main.styl';


declareChildApplication('products', () => import('./apps/max-react-app/spa'), pathPrefix('/products'));
declareChildApplication('detail/', () => import('./apps/max-react-app2/spa'), pathPrefix('/detail/'));

start();

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.indexOf(`${ prefix }`) === 0;
  }
}
