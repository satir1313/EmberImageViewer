import EmberRouter from '@ember/routing/router';
import config from 'ember-image-viewer/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('Preview-Image');
  this.route('image', {path: '/image/:image_id'});
});
