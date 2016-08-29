var Timestamp = React.createClass({
    render: function() {
      var timestampStr = new Date(parseInt(this.props.time_stamp)).toLocaleString()
      return (<div id="timestamp" visibility="hidden">
          { timestampStr }
          </div>);
    }
});
