var Timestamp = React.createClass({
    displayName: "Timestamp",

    render: function () {
        return React.createElement("div", null);
        var timestampStr = new Date(parseInt(this.props.time_stamp)).toLocaleString();
        return React.createElement(
            "div",
            { id: "timestamp" },
            timestampStr
        );
    }
});