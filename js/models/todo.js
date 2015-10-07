var app = app || {};

// Todo Model
// attributes: title, completed, order

app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },

  // toggle completed's value
  toggle: function(){
    this.save({
      completed: !this.get('completed')
    });
  }
});


