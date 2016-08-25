var Footer = React.createClass({
  displayName: "Footer",

  render: function () {
    return React.createElement(
      "footer",
      null,
      "footer",
      React.createElement(Timestamp, { time_stamp: this.props.time_stamp })
    );
  }
});