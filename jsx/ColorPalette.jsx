var ColorPalette = React.createClass({
    paletteCircles: function() {
        var userColor = this.props.userColor;
        var setUserColor=this.props.setUserColor
        return this.props.colorArr.map(function(circleColor) {
            return <td key={circleColor}><PaletteCircle circleColor={circleColor} circleSize="20px" userColor={userColor} setUserColor={setUserColor} /></ td>
        })
    },
    render: function() {
        var i = 0
        return (
        <article id='colorpalette'>
            <table><tbody><tr >{this.paletteCircles()}</ tr></ tbody></ table>
        </ article>
        );
  }
});
