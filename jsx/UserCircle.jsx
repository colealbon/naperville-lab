var UserCircle = React.createClass({
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
    onStart: function() {
      this.setState({activeDrags: ++this.state.activeDrags});
    },
    onStop: function() {
      this.setState({activeDrags: --this.state.activeDrags});
    },
    handleDrag: function (e, ui) {
      const {x, y} = this.state.deltaPosition;
      this.setState({
        deltaPosition: {
          x: x + ui.deltaX,
          y: y + ui.deltaY,
        }
      });
    },
    render: function() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const {deltaPosition, controlledPosition} = this.state;

        var circleStyle = {
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            border: (this.props.editorUserId === this.props.userId) ? "2px solid black" : "2px solid {this.props.userColor}",
            backgroundColor: this.props.userColor,
         };
        return (
            <ReactDraggable onDrag={this.handleDrag} {...dragHandlers}>
            <article id='colorcircle' backgroundColor="#ffffff">
            <span style={circleStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ span>{this.props.userName}x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}
            </ article>
            </ ReactDraggable>
        )
    }
});
