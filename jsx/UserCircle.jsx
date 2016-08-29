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
        if (this.props.editorUserId !== this.props.userId) {
              return false
        }
        const {x, y} = this.state.deltaPosition;
        //console.log({"x":x, "y":y})
        //console.log(this.state)
        console.log(this.props.userId, JSON.stringify(this.state))
        this.setState({
        deltaPosition: {
          x: x + ui.deltaX,
          y: y + ui.deltaY,
        }
        });
    },
    onStart: function() {
        if (this.props.editorUserId !== this.props.userId) {
              return false
        }
        this.setState({activeDrags: ++this.state.activeDrags});
    },
    onStop: function() {
      this.setState({activeDrags: --this.state.activeDrags});
    },

    // For controlled component
    adjustXPos: function(e) {
      e.preventDefault();
      e.stopPropagation();
      const {x, y} = this.state.controlledPosition;
      this.setState({controlledPosition: {x: x - 10, y}});
    },

    adjustYPos: function(e) {
      e.preventDefault();
      e.stopPropagation();
      const {controlledPosition} = this.state;
      const {x, y} = this.state.controlledPosition;
      this.setState({controlledPosition: {x, y: y - 10}});
    },

    onControlledDrag: function(e, position) {
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    },

    onControlledDragStop: function(e, position) {
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    },

    render: function() {
        const setDeltaPosition = this.props.setDeltaPosition
        const dragHandlers = {onStart: this.props.onStart, onStop: this.props.onStop};
        const {deltaPosition, controlledPosition} = this.state;
        var circleStyle = {
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            border:
                (this.props.editorUserId === this.props.userId) ?
                "2px solid black" :
                "2px solid {this.props.userColor}",
            backgroundColor: this.props.userColor,
         };
        return (
            <ReactDraggable onDrag={this.handleDrag} {...dragHandlers}>
            <article id='usercircle' backgroundColor="#ffffff">
            <table>
            <tbody>
            <tr>
                <td><div style={circleStyle}></ div></ td>
                <td>{this.props.userName}</ td>
            </ tr>
            </ tbody>
            </ table>
            </ article>
            </ ReactDraggable>
        )
    }
});
