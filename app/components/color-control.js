import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['color-control'],
  min:        0,
  max:        100,

  actions: {
    updateValue(event) {
      let value = Number(event.target.value);

      this.set('value', value);
    }
  }
});