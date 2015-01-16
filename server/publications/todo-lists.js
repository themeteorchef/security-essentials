Meteor.publish('todoLists', function() {
  var user = this.userId;
  if (user) {
    return TodoLists.find({"owner": user}, {
      fields: {
        "name": 1,
        "owner": 1
      }
    });
  }
});

Meteor.publish('singleTodoList', function(todoListId) {
  check(todoListId, String);

  if (todoListId) {
    var user = this.userId;
    return TodoLists.find({"_id": todoListId, "owner": user}, {
      fields: {
        "name": 1
      }
    });
  }
});
