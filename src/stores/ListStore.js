var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var QcConstants = require('../constants/QcConstants');
var assign = require('object-assign');

var _lists = {};
var CHANGE_EVENT = 'change';

/**
 * Create a list
 * @param  {string} name The name of the list
 */
function create(name) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp + random number in place of a real id.
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _lists[id] = {
    id: id,
    name: name
  };
}

create('List 1');
create('List 2');

var ListStore = assign({}, EventEmitter.prototype, {

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * Get the entire collection of lists.
   * @return {object}
   */
  getAll: function() {
    return _lists;
  }

});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case QcConstants.LIST_CREATE:
      var name = action.name.trim();
      if (name !== '') {
        create(name);
      }
      ListStore.emitChange();
      break;

    default:
	  throw Error('Unhandled action: '+action.actionType);
  }
});

module.exports = ListStore;
