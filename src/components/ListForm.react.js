var React = require('react');
var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var ListForm = React.createClass({

  propTypes: {
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  getInitialState: function() {
	  return {
		  value: this.props.value || ''
	  }
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <form>
        <input
          id="list-name-field"
          type="text"
		  placeholder="New list"
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
		  value={this.state.value}
        />
      </form>
    );
  },


  /**
   * @param  {object} event
   */
  _onKeyDown: function(event) {
    if (event.keyCode !== ENTER_KEY_CODE) {
	  return true;
    }
	  this.props.onSave(this.state.value);
		this.setState({
			value: ''
		});
	  event.preventDefault();
  },

  /**
   * @param {object} event
   */
  _onChange: function(/*object*/ event) {
    this.setState({
      value: event.target.value
    });
  }


});

module.exports = ListForm;
