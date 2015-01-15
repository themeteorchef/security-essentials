/*
*  Controller: Todo Lists
*  Template: /client/views/authenticated/todo-lists.html
*/

/*
* Rendered
*/

Template.todoLists.rendered = function(){
  $('#add-todo-list').validate({
    rules: {
      todoListName: {
        required: true
      }
    },
    messages: {
      todoListName: {
        required: "Please specify a name for your todo list."
      }
    },
    submitHandler: function(){
      var list = {
        "name": $('[name="todoListName"]').val(),
        "owner": Meteor.userId(),
        "extraKey1": "This is another value on our list.",
        "extraKey2": 123456
      }

      Meteor.call('insertTodoList', list, function(error, response){
       if (error) {
        console.log(error);
       } else {
        // Do something here.
       }
      });
    }
  });
}

/*
* Helpers
*/

Template.todoLists.helpers({
  todoLists: function(){
    var user         = Meteor.userId(),
        getTodoLists = TodoLists.find({"owner": user}, {fields: {"name": 1}});

    if ( getTodoLists ){
      return getTodoLists;
    }
  }
});

/*
* Events
*/

Template.todoLists.events({
  'submit form': function(e){
    e.preventDefault();
  }
});
