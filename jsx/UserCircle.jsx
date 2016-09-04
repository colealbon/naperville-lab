var UserCircle = React.createClass({
    getInitialState: function () {
        return {
            activeDrags: 0,
            deltaPosition: {x: 0, y: 0},
            controlledPosition: {
                x: 0, y: 0
            }
        };
    },
    broadcastState: function() {
        this.props.broadcastState(

        )
    },
    setDeltaPosition: function() {
        this.props.setDeltaPosition()
    },
    handleDrag: function (e, ui) {
        if (this.props.editorUserId !== this.props.userId) {
            return false
        }
        const {x, y} = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
        this.props.setDeltaPosition(this.state.deltaPosition);
    },
    onStart: function() {
      this.setState({activeDrags: ++this.state.activeDrags});
    },
    onStop: function(e, position) {
      var self = this
      alert("onStop " + "position: x:" + position.x + "y:" + position.y)
      this.setState({activeDrags: --this.state.activeDrags});
      this.broadcastState(
          {
              "userId": self.props.editorUserId,
              "userName": self.props.userName,
              "userColor": self.props.userColor,
              "position": self.position
          }
      )
    },

    onControlledDrag: function(e, position) {
      alert("onControlledDrag " + position.x + ":" + position.y)
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    },
    onControlledDragStop: function(e, position) {
      alert("onControlledDragStop " + position.x + ":" + position.y)
      alert(e)
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
      // this.setState({deltaPosition: {position.deltaX, position.deltaY}});
    },
    render: function() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const {deltaPosition, controlledPosition} = this.state;
        const offsetParentElement = document.body
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
            <ReactDraggable
                onDrag={this.handleDrag}
                defaultPosition = {this.props.userDeltaPosition}
                offsetParent = {this.offsetParentElement}
                {...dragHandlers}>

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
