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
    onStart: function () {
        this.setState({ activeDrags: ++this.state.activeDrags });
    },
    onStop: function () {
        this.setState({ activeDrags: --this.state.activeDrags });
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

        var circleStyle = {
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            border: this.props.editorUserId === this.props.userId ? "2px solid black" : "2px solid {this.props.userColor}",
            backgroundColor: this.props.userColor
        };
        return React.createElement(
            ReactDraggable,
            _extends({ onDrag: this.handleDrag }, dragHandlers),
            React.createElement(
                "article",
                { id: "colorcircle", backgroundColor: "#ffffff" },
                React.createElement(
                    "span",
                    { style: circleStyle },
                    "     "
                ),
                this.props.userName,
                "x: ",
                deltaPosition.x.toFixed(0),
                ", y: ",
                deltaPosition.y.toFixed(0)
            )
        );
    }
});