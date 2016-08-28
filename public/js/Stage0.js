var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Draggable = ReactDraggable;
var Stage0 = React.createClass({
  displayName: "Stage0",


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

  onStart: function () {
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
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "React Draggable"
      ),
      React.createElement(
        "p",
        null,
        "Active DragHandlers: ",
        this.state.activeDrags
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "a",
          { href: "https://github.com/mzabriskie/react-draggable/blob/master/example/index.html" },
          "Demo Source"
        )
      ),
      React.createElement(
        Draggable,
        _extends({ zIndex: 100 }, dragHandlers),
        React.createElement(
          "div",
          { className: "box" },
          "I can be dragged anywhere"
        )
      ),
      React.createElement(
        Draggable,
        _extends({ axis: "x" }, dragHandlers),
        React.createElement(
          "div",
          { className: "box cursor-x" },
          "I can only be dragged horizonally"
        )
      ),
      React.createElement(
        Draggable,
        _extends({ axis: "y" }, dragHandlers),
        React.createElement(
          "div",
          { className: "box cursor-y" },
          "I can only be dragged vertically"
        )
      ),
      React.createElement(
        Draggable,
        { onStart: () => false },
        React.createElement(
          "div",
          { className: "box" },
          "I don't want to be dragged"
        )
      ),
      React.createElement(
        Draggable,
        _extends({ onDrag: this.handleDrag }, dragHandlers),
        React.createElement(
          "div",
          { className: "box" },
          React.createElement(
            "div",
            null,
            "I track my deltas"
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
      ),
      React.createElement(
        Draggable,
        _extends({ handle: "strong" }, dragHandlers),
        React.createElement(
          "div",
          { className: "box no-cursor" },
          React.createElement(
            "strong",
            { className: "cursor" },
            React.createElement(
              "div",
              null,
              "Drag here"
            )
          ),
          React.createElement(
            "div",
            null,
            "You must click my handle to drag me"
          )
        )
      ),
      React.createElement(
        Draggable,
        _extends({ cancel: "strong" }, dragHandlers),
        React.createElement(
          "div",
          { className: "box" },
          React.createElement(
            "strong",
            { className: "no-cursor" },
            "Can't drag here"
          ),
          React.createElement(
            "div",
            null,
            "Dragging here works"
          )
        )
      ),
      React.createElement(
        Draggable,
        _extends({ grid: [25, 25] }, dragHandlers),
        React.createElement(
          "div",
          { className: "box" },
          "I snap to a 25 x 25 grid"
        )
      ),
      React.createElement(
        Draggable,
        _extends({ grid: [50, 50] }, dragHandlers),
        React.createElement(
          "div",
          { className: "box" },
          "I snap to a 50 x 50 grid"
        )
      ),
      React.createElement(
        Draggable,
        _extends({ bounds: { top: -100, left: -100, right: 100, bottom: 100 }, zIndex: 5 }, dragHandlers),
        React.createElement(
          "div",
          { className: "box" },
          "I can only be moved 100px in any direction."
        )
      ),
      React.createElement(
        "div",
        { className: "box", style: { height: '500px', width: '500px', position: 'relative', overflow: 'auto' } },
        React.createElement(
          "div",
          { style: { height: '1000px', width: '1000px' } },
          React.createElement(
            Draggable,
            _extends({ bounds: "parent" }, dragHandlers),
            React.createElement(
              "div",
              { className: "box" },
              "I can only be moved within my offsetParent.",
              React.createElement("br", null),
              React.createElement("br", null),
              "Both parent padding and child margin work properly."
            )
          ),
          React.createElement(
            Draggable,
            _extends({ bounds: "parent" }, dragHandlers),
            React.createElement(
              "div",
              { className: "box" },
              "I also can only be moved within my offsetParent.",
              React.createElement("br", null),
              React.createElement("br", null),
              "Both parent padding and child margin work properly."
            )
          )
        )
      ),
      React.createElement(
        Draggable,
        _extends({ bounds: "body" }, dragHandlers),
        React.createElement(
          "div",
          { className: "box" },
          "I can only be moved within the confines of the body element."
        )
      ),
      React.createElement(
        Draggable,
        null,
        React.createElement(
          "div",
          _extends({ className: "box", style: { position: 'absolute', bottom: '100px', right: '100px' } }, dragHandlers),
          "I already have an absolute position."
        )
      ),
      React.createElement(
        Draggable,
        _extends({ defaultPosition: { x: 25, y: 25 } }, dragHandlers),
        React.createElement(
          "div",
          { className: "box" },
          "I have a default position of {x: 25, y: 25}, so I'm slightly offset."
        )
      ),
      React.createElement(
        Draggable,
        _extends({ zIndex: 100, position: controlledPosition }, dragHandlers, { onDrag: this.onControlledDrag }),
        React.createElement(
          "div",
          { className: "box" },
          "My position can be changed programmatically. ",
          React.createElement("br", null),
          "I have a drag handler to sync state.",
          React.createElement(
            "p",
            null,
            React.createElement(
              "a",
              { href: "#", onClick: this.adjustXPos },
              "Adjust x (",
              controlledPosition.x,
              ")"
            )
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "a",
              { href: "#", onClick: this.adjustYPos },
              "Adjust y (",
              controlledPosition.y,
              ")"
            )
          )
        )
      ),
      React.createElement(
        Draggable,
        _extends({ zIndex: 100, position: controlledPosition }, dragHandlers, { onStop: this.onControlledDragStop }),
        React.createElement(
          "div",
          { className: "box" },
          "My position can be changed programmatically. ",
          React.createElement("br", null),
          "I have a dragStop handler to sync state.",
          React.createElement(
            "p",
            null,
            React.createElement(
              "a",
              { href: "#", onClick: this.adjustXPos },
              "Adjust x (",
              controlledPosition.x,
              ")"
            )
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "a",
              { href: "#", onClick: this.adjustYPos },
              "Adjust y (",
              controlledPosition.y,
              ")"
            )
          )
        )
      )
    );
  }
});