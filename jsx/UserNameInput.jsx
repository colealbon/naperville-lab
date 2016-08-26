var UserNameInput = React.createClass({
    getInitialState: function() {
      return {username: this.props.username || "" };
    },
    handleChange: function(event) {
      this.setState({username: event.target.value});
    },
    render: function() {
      username = this.state.username
      return (
        <input
          type="text"
          maxlength="16"
          value={this.state.username}
          onChange={this.handleChange}
        />
      );
    }
});
