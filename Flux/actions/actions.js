var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/contants');

var actions = {
  addItem:function(){
    AppDispatcher.dispatch({
            actionType: Constants.ACTION_ADD_ITEM
        });
  },
  editItem:function(){
    AppDispatcher.dispatch({
            actionType: Constants.ACTION_EDIT_ITEM
        });
  },
  deleteItem:function(){
    AppDispatcher.dispatch({
            actionType: Constants.ACTION_DELETE_ITEM
        });
  },
  listItem:function(){
    AppDispatcher.dispatch({
            actionType: Constants.ACTION_LIST_ITEM
        });
  },
  detailItem:function(){
    AppDispatcher.dispatch({
            actionType: Constants.ACTION_DETAIL_ITEM
        });
  },
  deleteCart:function(){
    AppDispatcher.dispatch({
            actionType: Constants.ACTION_DELETECART_ITEM
        });
  }
};
module.exports = actions;
