var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var UserCircle = React.createClass({
    displayName: "UserCircle",

    getInitialState: function () {
        return {
            activeDrags: 0,
            deltaPosition: { x: 0, y: 0 },
            controlledPosition: {
                x: 0, y: 0
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
    onStop: function (e, position) {
        var self = this;
        alert("onStop " + "position: x:" + position.x + "y:" + position.y);
        this.setState({ activeDrags: --this.state.activeDrags });
        this.broadcastState({
            "userId": self.props.editorUserId,
            "userName": self.props.userName,
            "userColor": self.props.userColor,
            "position": self.position
        });
    },

    onControlledDrag: function (e, position) {
        alert("onControlledDrag " + position.x + ":" + position.y);
        const { x, y } = position;
        this.setState({ controlledPosition: { x, y } });
    },
    onControlledDragStop: function (e, position) {
        alert("onControlledDragStop " + position.x + ":" + position.y);
        alert(e);
        const { x, y } = position;
        this.setState({ controlledPosition: { x, y } });
        // this.setState({deltaPosition: {position.deltaX, position.deltaY}});
    },
    render: function () {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        const { deltaPosition, controlledPosition } = this.state;
        const offsetParentElement = document.body;
        var circleStyle = {
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            border: this.props.editorUserId === this.props.userId ? "2px solid black" : "2px solid {this.props.userColor}",
            backgroundColor: this.props.userColor
        };
        return React.createElement(
            ReactDraggable,
            _extends({
                onDrag: this.handleDrag,
                defaultPosition: this.props.userDeltaPosition,
                offsetParent: this.offsetParentElement
            }, dragHandlers),
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