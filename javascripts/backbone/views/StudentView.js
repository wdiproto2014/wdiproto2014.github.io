var StudentView = Backbone.View.extend({
  template: _.template($('#headshot-template').html()),
  descriptionTemplate: _.template($('#student-profile-template').html()),
  tagName: 'li',
  initialize: function(){
    this.listenTo(this.model, 'all', this.render)
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes))
    return this;
  },
  events: {
    'click' : 'renderStudentDescription'
  },
  renderStudentDescription: function() {
    var container = $('.student-desc');
    container.html('');
    container.html(this.descriptionTemplate(this.model.attributes));
  }
})
