import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),

  grayscale:  0,
  hue:        0,
  blur:       0,
  contrast:   100,
  actionName: 'startSlideshow',
  isRunning: false,
  slideSpeed: 500,

  photoStyle: Ember.computed('grayscale', 'hue', 'blur', 'contrast', function() {
    let css = `
      filter: grayscale(${this.get('grayscale')}%)
              hue-rotate(${this.get('hue')}deg)
              blur(${this.get('blur')}px)
              contrast(${this.get('contrast')}%);
    `;

    return Ember.String.htmlSafe(css);
  }),

  actions: {
    doNext() {
      let nextPhoto = this.get('model');
      let albumPhotos = this.get('applicationController.model');

      if (albumPhotos.get('lastObject') === nextPhoto ) {
        nextPhoto = albumPhotos.get('firstObject');
      } else {
        nextPhoto = albumPhotos.objectAt(albumPhotos.indexOf(nextPhoto) + 1);
      }

      this.transitionToRoute('album.photo', nextPhoto);
    },

    doPrev() {
      let previousPhoto = this.get('model');
      let albumPhotos = this.get('applicationController.model');

      if (albumPhotos.get('firstObject') === previousPhoto) {
        previousPhoto = albumPhotos.get('lastObject');
      } else {
        previousPhoto = albumPhotos.objectAt(albumPhotos.indexOf(previousPhoto) - 1);
      }

      this.transitionToRoute('album.photo', previousPhoto);
    },

    startSlideshow(){
        this.set('isRunning', true);
        this.send('runSlideshow');
        this.set('actionName', 'stopSlideshow');
    },

    runSlideshow() {
        if (this.get('isRunning') == true){
            Ember.run.later(this, ()=> {
                this.send('doNext');
                this.send('runSlideshow');
            }, this.get('slideSpeed'));
        }
    },

    stopSlideshow() {
        this.set('isRunning', false);
        this.set('actionName', 'startSlideshow');
    },
    setDefault(){
      this.set('grayscale', 0);
      this.set('hue', 0);
      this.set('blur', 0);
      this.set('contrast', 100);
    }
  }
});