var Footer = React.createClass({
  render: function() {
    return (
      <footer> 
          <Timestamp time_stamp={this.props.time_stamp} />
      </footer>
    );
  }
});
