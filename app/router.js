import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('album', function() {
    this.route('photo', {
      path: '/photos/:photo_id'
    });
  });

  this.route('lightbox', {
    path: '/lightbox/:photo_id'
  });
});

export default Router;