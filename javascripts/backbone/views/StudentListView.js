var StudentListView = Backbone.View.extend({
  template: _.template($('#class-template').html()),
  initialize: function(){
    this.listenTo(this.collection, 'change', this.render);
  },
  render: function(){
    var that = this;
    this.$el.empty();
    _.each(this.collection, function(student){
      var studentView = new StudentView({model: student});
      that.$el.append(studentView.render().el);
    })
    return this;
  }
})
