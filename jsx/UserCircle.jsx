var UserCircle = React.createClass({
    getInitialState: function () {
        return {
            position: {x: 0, y: 0},
            activeDrags: 0,
            deltaPosition: {x: 0, y: 0},
            controlledPosition: {
                x: 0, y: 0
            }
        };
    },
    broadcastState: function() {
        this.props.broadcastState()
    },
    setPosition: function(position) {
        this.props.setPosition(position)
    },
    /*
    handleDrag: function (e, ui) {
        if (this.props.editorUserId !== this.props.userId) {
            return false
        }
        const {x, y} = ui;
        this.setState({
            position: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
        setTimeout(function() {
            console.log(this.state.position)
            this.props.setPosition(this.state.position);
        });
    },
    */
    onStart: function() {
      this.setState({activeDrags: ++this.state.activeDrags});
    },
    onStop: function(e, position) {
      var self = this
     // alert("onStop " + "position: x:" + position.x + "y:" + position.y)
      self.setState({activeDrags: --this.state.activeDrags});
      self.setPosition( position );
      setTimeout(function () {
          // alert("broadcasting")
          self.broadcastState()
      })
    },

    onControlledDrag: function(e, position) {
      // alert("onControlledDrag " + position.x + ":" + position.y)
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    },
    onControlledDragStop: function(e, position) {
      alert("onControlledDragStop " + position.x + ":" + position.y)
      //alert(e)
      const {x, y} = position;
      //this.setState({controlledPosition: {x, y}});
      //this.setState({deltaPosition: {position.deltaX, position.deltaY}});
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
                defaultPosition = {this.props.position}
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
