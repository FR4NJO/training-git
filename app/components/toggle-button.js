import Ember from 'ember';

export default Ember.Component.extend({
  isShowing: false,

  actions: {
    show() {
      this.set('isShowing', true);
    },

    hide() {
      this.set('isShowing', false);
    }
  }
});
