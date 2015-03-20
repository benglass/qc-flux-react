var React = require('react');
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

    var list = this.props.list;

    return (
      <h1>{list.name}</h1>
    );
  },
});

module.exports = MainSection;
