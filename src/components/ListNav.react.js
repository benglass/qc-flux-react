var React = require('react');
var ReactPropTypes = React.PropTypes;

var ListNav = React.createClass({

  propTypes: {
    lists: ReactPropTypes.object.isRequired,
    onClick: ReactPropTypes.func.isRequired
  },

  on: {
	  click: function(id) {
		  this.props.onClick(id);
	  }
  },

  /**
   * @return {object}
   */
  render: function() {
	  return (
		  <nav>
			  <ol>
			  {Object.keys(this.props.lists).map(function(id) {
				  return <li key={id} onClick={this.on.click.bind(this, id)}>
							  {this.props.lists[id].name}
						  </li>
			  }, this)}
			  </ol>
		  </nav>
	  )
  },

});

module.exports = ListNav;
