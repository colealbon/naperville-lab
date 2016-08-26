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
        var size=this.props.size;
        var id=this.props.id;
        var label=this.props.label || this.props.id;
        var circleStyle = {
            borderRadius: "50%",
            width: this.props.size,
            height: this.props.size,
            backgroundColor: this.props.color,
         };
        return (
            <ReactDraggable bounds="body" onDrag={this.handleDrag} {...dragHandlers}>
            <article id='colorcircle'>
            <div key={id} id="{id}" style={circleStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{label}</div>
            </ article>
            </ ReactDraggable>
            )
        }
});
