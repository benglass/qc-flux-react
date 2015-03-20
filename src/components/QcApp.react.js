var React = require('react');
var ListForm = require('./ListForm.react');
var MainSection = require('./MainSection.react');
var ListStore = require('../stores/ListStore');
var ListActions = require('../actions/ListActions');

/**
 * Retrieve the current qc checklists from the store
 */
function getQcState() {
  return {
	list: null,
    allLists: ListStore.getAll()
  };
}

var QcApp = React.createClass({

  getInitialState: function() {
    return getQcState();
  },

  componentDidMount: function() {
    ListStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ListStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
    if (Object.keys(this.state.allLists).length < 1) {
      return null;
    }

	var lists = this.state.allLists;
  	return (
	<div>
	  <nav>
		  <ol>
		  {Object.keys(lists).map(function(id) {
			  return <li key={id} onClick={this._click.bind(this, id)}>{lists[id].name}</li>
		  }, this)}
		  </ol>
	   </nav>
	   <ListForm onSave={this.saveList} />
	   <MainSection list={this.state.list} />
   </div>
  	);
  },

  _click: function(id) {
	  var state = getQcState();
	  state.list = this.state.allLists[id];
	  this.setState(state);
  },

  saveList: function(name) {
	  ListActions.create(name);
  },

  /**
   * Event handler for 'change' events coming from the ListStore
   */
  _onChange: function() {
    this.setState(getQcState());
  }

});

module.exports = QcApp;
