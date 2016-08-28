var Footer = React.createClass({
  displayName: "Footer",

  render: function () {
    return React.createElement(
      "footer",
      null,
      React.createElement(Timestamp, { time_stamp: this.props.time_stamp })
    );
  }
});