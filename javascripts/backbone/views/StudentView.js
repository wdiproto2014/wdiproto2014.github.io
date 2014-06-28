var StudentView = Backbone.View.extend({
  template: _.template($('#student-template').html()),
  initialize: function(){
    this.listenTo(this.model, 'change', this.render)
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes))
    return this;
  }
})
