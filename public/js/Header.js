var Header = React.createClass({
  displayName: "Header",

  render: function () {
    return React.createElement(
      "header",
      null,
      "header  app_name: ",
      app_name
    );
  }
});