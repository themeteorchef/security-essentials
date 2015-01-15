/*
* Methods: Todo Lists
* Server-side methods for peforming operations on the TodoLists collection.
*/

Meteor.methods({
  insertTodoList: function(list){
    check(list, {
      "name": String,
      "owner": String,
      "extraKey1": String,
      "extraKey2": Number
    });

    TodoLists.insert(list, function(error, id){
      if (error) {
        console.log(error);
      } else {
        // Do something here.
      }
    });
  }
});
