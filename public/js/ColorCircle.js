var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ColorCircle = React.createClass({
  displayName: "ColorCircle",

  getInitialState: function () {
    return {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };
  },

  handleDrag: function (e, ui) {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  },

  render: function () {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    var size = this.props.size;
    var maxOffset = this.props.maxOffset;
    var id = this.props.id;
    var label = this.props.label || this.props.id;
    var circleStyle = {
      borderRadius: "50%",
      width: this.props.size,
      height: this.props.size,
      backgroundColor: this.props.color
    };
    return React.createElement(
      ReactDraggable,
      _extends({ bounds: "body", onDrag: this.handleDrag }, dragHandlers),
      React.createElement(
        "article",
        { id: "colorcircle" },
        React.createElement(
          "div",
          { key: id, id: "{id}", style: circleStyle },
          "     ",
          label
        ),
        React.createElement(
          "div",
          null,
          "x: ",
          deltaPosition.x.toFixed(0),
          ", y: ",
          deltaPosition.y.toFixed(0)
        )
      )
    );
  }
});