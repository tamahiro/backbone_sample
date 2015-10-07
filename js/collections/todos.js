var app = app || {};

// Todo Model's collection
var TodoList = Backbone.Collection.extend({
  // Model
  model: app.Todo,
  // store browser's localstorage
  localstorage: new Backbone.LocalStorage('todo-backbone'),
  // filtering only Todo which is completed
  completed: function(){
    return this.filter(function(todo){
      return todo.get('completed');
    })
  },
  // filtering only Todo which is not completed
  remaining: function(){
    return this.without.apply(this, this.completed());
  },
  // return oreder of Todos
  nextOrder: function(){
    if(!this.length){
      return 1;
    }
    return this.last().get('order') + 1;
  },
  // sort Todos by created
  comparator: function(todo){
    return todo.get('order');
  }
})

app.TodoList = new TodoList();
