var Timestamp = React.createClass({
    displayName: "Timestamp",

    render: function () {
        var timestampStr = new Date(parseInt(this.props.time_stamp)).toLocaleString();
        return React.createElement(
            "div",
            { id: "timestamp" },
            "timestamp: ",
            timestampStr
        );
    }
});