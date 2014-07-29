var StudentView = Backbone.View.extend({
  template: _.template($('#headshot-template').html()),
  tagName: 'li',
  initialize: function(){
    this.listenTo(this.model, 'all', this.render)
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes))
    return this;
  }
})
