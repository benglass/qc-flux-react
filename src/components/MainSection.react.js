var React = require('react');
var ListDetail = require('./ListDetail.react');
var ReactPropTypes = React.PropTypes;

var MainSection = React.createClass({

  propTypes: {
    list: ReactPropTypes.object
  },

  /**
   * @return {object}
   */
  render: function() {
    // This section should be hidden by default
    // and shown when there is a list.
    if (!this.props.list) {
      return null;
    }

    return (
		<ListDetail list={this.props.list} />
    );
  },
});

module.exports = MainSection;
