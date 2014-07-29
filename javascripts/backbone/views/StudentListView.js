var StudentListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'all', this.render);
  },
  render: function(){
    var that = this;
    _.each(this.collection.models, function(student){
      var studentView = new StudentView({model: student});
      that.$el.append(studentView.render().el);
    })
    return this;
  }
})
