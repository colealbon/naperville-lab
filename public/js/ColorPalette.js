var ColorPalette = React.createClass({
  displayName: "ColorPalette",

  render: function () {
    return React.createElement(
      "section",
      { id: "colorpalette" },
      "color palette section",
      React.createElement(ColorCircle, { size: "20px" }),
      React.createElement(ColorCircle, { size: "20px" }),
      React.createElement(ColorCircle, { size: "20px" }),
      React.createElement(ColorCircle, { size: "20px" })
    );
  }
});