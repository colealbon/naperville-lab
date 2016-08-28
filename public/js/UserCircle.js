var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var UserCircle = React.createClass({
    displayName: "UserCircle",

    getInitialState: function () {
        return {
            activeDrags: this.props.activeDrags,
            deltaPosition: this.props.deltaPosition,
            controlledPosition: this.props.controlledPosition
        };
    },
    render: function () {
        //const onStart = this.props.onStart
        //const onStop = this.props.onStop
        //const handleDrag = this.props.handleDrag
        const dragHandlers = { onStart: this.props.onStart, onStop: this.props.onStop };
        //const deltaPosition = this.props.deltaPosition;
        //const controlledPosition = this.props.controlledPosition;
        const deltaPositionStr = this.state.deltaPosition ? this.state.deltaPosition : "";
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
                    "span",
                    { style: circleStyle },
                    "     "
                ),
                this.props.userName,
                " ",
                deltaPositionStr
            )
        );
    }
});