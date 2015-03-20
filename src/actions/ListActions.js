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

};

module.exports = ListActions;
