var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/contants');

var actions = {
  addItem:function(text){
    AppDispatcher.dispatch({
            actionType: Constants.ACTION_ADD_ITEM,
            text:text
        });
  },
  editItem:function(id, update){
    AppDispatcher.dispatch({
            actionType: Constants.ACTION_EDIT_ITEM,
            id: id,
            update: update
        });
  },
  deleteItem:function(id){
    AppDispatcher.dispatch({
            actionType: Constants.ACTION_DELETE_ITEM,
            id: id
        });
  },
  // listItem:function(){
  //   AppDispatcher.dispatch({
  //           actionType: Constants.ACTION_LIST_ITEM
  //       });
  // },
  detailItem:function(id){
    AppDispatcher.dispatch({
            actionType: Constants.ACTION_DETAIL_ITEM,
            id: id
        });
  },
  deleteCart:function(id){
    AppDispatcher.dispatch({
            actionType: Constants.ACTION_DELETECART_ITEM,
            id:id
        });
  }
};
module.exports = actions;
