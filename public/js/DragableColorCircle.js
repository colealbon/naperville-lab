var ColorCircle = React.createClass({
    displayName: "ColorCircle",

    render: function () {
        var size = this.props.size;
        var maxOffset = this.props.maxOffset;
        var id = this.props.id;
        var label = this.props.label;
        return React.createElement(
            "div",
            { key: id },
            React.createElement(
                ReactDraggable,
                null,
                React.createElement(ColorCircle, { key: user.id, id: id, color: user.color, size: size, maxoffset: maxOffset, label: label })
            )
        );
    }
});