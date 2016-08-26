var PaletteCircle = React.createClass({
    displayName: "PaletteCircle",

    changeColor: function (userColor) {
        this.props.setUserColor(this.props.circleColor);
    },
    render: function () {
        var circleColor = this.props.circleColor;
        var circleStyle = {
            borderRadius: "50%",
            width: this.props.circleSize,
            height: this.props.circleSize,
            backgroundColor: this.props.circleColor
        };
        return React.createElement(
            "div",
            { style: circleStyle, onClick: this.changeColor },
            " "
        );
    }
});