var QcConstants = require('../constants/QcConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var ListActions = {

  /**
   * @param  {string} name
   */
  create: function(name) {
    AppDispatcher.dispatch({
      actionType: QcConstants.LIST_CREATE,
      name: name
    });
  },

  /**
   * @param  {string} name
   */
  delete: function(id) {
    AppDispatcher.dispatch({
      actionType: QcConstants.LIST_DELETE,
      id: id
    });
  }

};

module.exports = ListActions;
