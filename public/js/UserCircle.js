var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var UserCircle = React.createClass({
  displayName: "UserCircle",

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
    if (this.props.editorUserId !== this.props.userId) {
      return false;
    }
    const { x, y } = this.state.deltaPosition;
    //console.log({"x":x, "y":y})
    //console.log(this.state)
    console.log(this.props.userId, JSON.stringify(this.state));
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  },
  onStart: function () {
    if (this.props.editorUserId !== this.props.userId) {
      return false;
    }
    this.setState({ activeDrags: ++this.state.activeDrags });
  },
  onStop: function () {
    this.setState({ activeDrags: --this.state.activeDrags });
  },

  // For controlled component
  adjustXPos: function (e) {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  },

  adjustYPos: function (e) {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  },

  onControlledDrag: function (e, position) {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  },

  onControlledDragStop: function (e, position) {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  },

  render: function () {
    const setDeltaPosition = this.props.setDeltaPosition;
    const dragHandlers = { onStart: this.props.onStart, onStop: this.props.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    var circleStyle = {
      borderRadius: "50%",
      width: "20px",
      height: "24px",
      border: this.props.editorUserId === this.props.userId ? "2px solid black" : "2px solid {this.props.userColor}",
      backgroundColor: this.props.userColor
    };
    return React.createElement(
      ReactDraggable,
      _extends({ onDrag: this.handleDrag }, dragHandlers),
      React.createElement(
        "article",
        { id: "usercircle", backgroundColor: "#ffffff" },
        React.createElement(
          "span",
          { style: circleStyle },
          "     "
        ),
        this.props.userName,
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