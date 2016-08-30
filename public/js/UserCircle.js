var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var UserCircle = React.createClass({
    displayName: "UserCircle",

    getInitialState: function () {
        return {
            activeDrags: 0,
            deltaPosition: { x: 0, y: 0 },
            controlledPosition: {
                x: -400, y: 200
            }
        };
    },
    broadcastState: function () {
        this.props.broadcastState();
    },
    setDeltaPosition: function () {
        this.props.setDeltaPosition();
    },
    handleDrag: function (e, ui) {
        if (this.props.editorUserId !== this.props.userId) {
            return false;
        }
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY
            }
        });
        this.props.setDeltaPosition(this.state.deltaPosition);
    },
    onStart: function () {
        this.setState({ activeDrags: ++this.state.activeDrags });
    },
    onStop: function () {
        this.setState({ activeDrags: --this.state.activeDrags });
        this.broadcastState({
            "userId": this.props.editorUserId,
            "userName": this.props.userName,
            "userColor": this.props.userColor,
            "userDeltaPosition": this.state.deltaPosition
        });
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
                { id: "usercircle", backgroundColor: "#ffffff" },
                React.createElement(
                    "table",
                    null,
                    React.createElement(
                        "tbody",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                React.createElement("div", { style: circleStyle })
                            ),
                            React.createElement(
                                "td",
                                null,
                                this.props.userName
                            )
                        )
                    )
                )
            )
        );
    }
});