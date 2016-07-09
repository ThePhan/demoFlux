var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
/**
  * A bridge function between the views and the dispatcher, marking the action
  * as a view action.  Another variant here could be handleServerAction.
  * @param  {object} action The data coming from the view.
  */
AppDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}
module.export=AppDispatcher;
