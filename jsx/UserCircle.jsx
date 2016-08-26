var UserCircle = React.createClass({
    onControlledDrag: function(e, position) {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}});
    },
    render: function() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        //const {deltaPosition, controlledPosition} = this.state;
        //console.log(this.state)
        var circleStyle = {
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            backgroundColor: this.props.userColor,
         };
        return (
            <ReactDraggable key={this.props.userId} position={this.controlledPosition} bounds="body" onDrag={this.onControlledDrag} {...dragHandlers}>
            <article id='colorcircle'>
            <div style={circleStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.userName}</div>
            </ article>
            </ ReactDraggable>
            )
        }
});
