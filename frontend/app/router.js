import EmberRouter from '@ember/routing/router';
import config from 'frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('recipes', function () {
    this.route('recipe', { path: '/:recipe_id' });
  });
  this.route('cart', { path: '/shopping-cart' });
  this.route('wishlist');
});
