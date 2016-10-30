import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('photo', params.photo_id);
  }
});