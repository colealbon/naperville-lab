var Timestamp = React.createClass({
    render: function() {
        return <div />
        var timestampStr = new Date(parseInt(this.props.time_stamp)).toLocaleString()
        return (
            <div id="timestamp" >
              { timestampStr }
            </div>
        );
    }
});
