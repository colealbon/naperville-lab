var ColorCircle = React.createClass({
    render: function() {
    var size=this.props.size;
    var maxOffset=this.props.maxOffset;
    var id=this.props.id;
    var label=this.props.label;
    return (
        <div key={id}>
        <ReactDraggable>
        <ColorCircle key={user.id} id={id} color={user.color} size={size} maxoffset={maxOffset} label={label}/>
        </ReactDraggable>
        </div>
        )
    }
});
