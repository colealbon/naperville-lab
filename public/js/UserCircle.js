var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var UserCircle = React.createClass({
    displayName: "UserCircle",

    onControlledDrag: function (e, position) {
        const { x, y } = position;
        this.setState({ controlledPosition: { x, y } });
    },
    render: function () {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        //const {deltaPosition, controlledPosition} = this.state;
        //console.log(this.state)
        var circleStyle = {
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            backgroundColor: this.props.userColor
        };
        return React.createElement(
            ReactDraggable,
            _extends({ key: this.props.userId, position: this.controlledPosition, bounds: "body", onDrag: this.onControlledDrag }, dragHandlers),
            React.createElement(
                "article",
                { id: "colorcircle" },
                React.createElement(
                    "div",
                    { style: circleStyle },
                    "     ",
                    this.props.userName
                )
            )
        );
    }
});