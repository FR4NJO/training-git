import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    sqareUrl: DS.attr('string'),
    thumbUrl: DS.attr('string'),
    largeUrl: DS.attr('string'),
    xlUrl: DS.attr('string')
});
