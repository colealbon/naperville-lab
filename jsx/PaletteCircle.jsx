var PaletteCircle = React.createClass({
    changeColor: function(userColor) {
        this.props.setUserColor(this.props.circleColor);
    },
    render: function() {
        var circleColor = this.props.circleColor
        var circleStyle = {
            borderRadius: "50%",
            width: this.props.circleSize,
            height: this.props.circleSize,
            backgroundColor: this.props.circleColor,
         };
        return (
            <div style={circleStyle} onClick={this.changeColor}> </ div>
            )
        }
});
