import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('interns', function() {
    this.route('show', { path: '/:id' });
    this.route('new');
  });
});

export default Router;
