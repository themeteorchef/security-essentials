/*
* Routes: Authenticated
* Routes that are only visible to authenticated users.
*/

Router.route('index', {
  path: '/'
});

Router.route('todoLists', {
  path: '/lists',
  template: 'todoLists',
  subscriptions: function(){
    return Meteor.subscribe('todoLists');
  },
  onBeforeAction: function(){
    // Code to run before route goes here.
    this.next();
  }
});

Router.route('viewTodoList', {
  path: "/lists/:_id",
  template: "todoList",
  subscriptions: function(){
    return Meteor.subscribe('singleTodoList', this.params._id);
  },
  data: function(){
    return TodoLists.findOne({"_id": this.params._id});
  }
});
