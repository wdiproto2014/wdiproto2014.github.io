var ProjectView = Backbone.View.extend({
  template: _.template($('#project-template').html()),
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
})
