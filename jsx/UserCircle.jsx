var UserCircle = React.createClass({
    getInitialState: function () {
        return {
            activeDrags: this.props.activeDrags,
            deltaPosition: this.props.deltaPosition,
            controlledPosition: this.props.controlledPosition,
        };
    },

    render: function() {
        const onStart = this.props.onStart
        const onStop = this.props.onStop
        const handleDrag = this.props.handleDrag
        const dragHandlers = {onStart: this.props.onStart, onStop: this.props.onStop};
        const deltaPosition = this.props.deltaPosition;
        const controlledPosition = this.props.controlledPosition;
        const deltaPositionStr = (this.props.deltaPosition) ? this.props.deltaPosition : ""
;
        var circleStyle = {
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            border: (this.props.editorUserId === this.props.userId) ? "2px solid black" : "2px solid {this.props.userColor}",
            backgroundColor: this.props.userColor,
         };
        return (
            <ReactDraggable onDrag={this.handleDrag} {...dragHandlers}>
            <article id='usercircle' backgroundColor="#ffffff">
            <span style={circleStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ span>
                {this.props.userName} {deltaPositionStr}
            </ article>
            </ ReactDraggable>
        )
    }
});
