var React = require('react');
var ReactPropTypes = React.PropTypes;
var ListActions = require('../actions/ListActions');

var ListDetail = React.createClass({

	getInitialState: function() {
		return {
			confirmed: false
		}
	},

  propTypes: {
    list: ReactPropTypes.object.isRequired
  },

	on: {
		delete: function(id) {
			if (!this.state.confirmed) {
				this.setState({
					confirmed: true
				});
				return true;
			}
			ListActions.delete(id);
		}
	},

  /**
   * @return {object}
   */
  render: function() {
    return (
		<div className="list">
			<h1>
				{this.props.list.name}
				<button className="list__delete" onClick={this.on.delete.bind(this, this.props.list.id)}>
				{ this.state.confirmed ? 'Confirm' : 'X' }
				</button>
			</h1>
		</div>
    );
  }

});

module.exports = ListDetail;
