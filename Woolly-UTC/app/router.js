import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('user');
  this.route('ventes', function() {
    this.route('show', { path: ':sale_id/show/items/' });
  });
  this.route('orders');
  this.route('login');
});

export default Router;
