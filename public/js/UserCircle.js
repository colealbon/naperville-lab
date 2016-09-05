var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var UserCircle = React.createClass({
    displayName: "UserCircle",

    getInitialState: function () {
        return {
            position: { x: 0, y: 0 },
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
    setPosition: function (position) {
        this.props.setPosition(position);
    },
    handleDrag: function (e, ui) {
        if (this.props.editorUserId !== this.props.userId) {
            return false;
        }
        const { x, y } = ui;
        this.setState({
            position: {
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
    onStop: function (e, position) {
        var self = this;
        self.setState({ activeDrags: --this.state.activeDrags });
        self.setPosition(position);
        setTimeout(function () {
            self.broadcastState();
        });
    },
    render: function () {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        const { deltaPosition, controlledPosition } = this.state;
        const userName = this.props.connected ? this.props.userName : "";

        var circleStyleVisible = {
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            border: this.props.editorUserId === this.props.userId ? "2px solid black" : "2px solid {this.props.userColor}",
            backgroundColor: this.props.userColor
        };
        var circleStyleHidden = {
            width: "20px",
            height: "20px"
        };
        var circleStyle = this.props.connected ? circleStyleVisible : circleStyleHidden;

        return React.createElement(
            ReactDraggable,
            _extends({
                onDrag: this.handleDrag,
                defaultPosition: this.props.position
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
                                userName
                            )
                        )
                    )
                )
            )
        );
    }
});