var React = require('react');
var ReactPropTypes = React.PropTypes;
var ListActions = require('../actions/ListActions');

var ListDetail = React.createClass({

  propTypes: {
    list: ReactPropTypes.object.isRequired
  },

	on: {
		delete: function(id) {
			ListActions.delete(id);
		}
	},

  /**
   * @return {object}
   */
  render: function() {
    return (
		<div class="list">
			<h1>
				{this.props.list.name}
				<button class="list__delete" onClick={this.on.delete.bind(this, this.props.list.id)}>X</button>
			</h1>
		</div>
    );
  },

});

module.exports = ListDetail;
