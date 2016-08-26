var UserNameInput = React.createClass({
    handleChange: function(event) {
        if(event.target.value.length > 16) {
           alert("too many letters")
           return
        }
        this.props.setUserName(event.target.value);
    },
    render: function() {
      userName = this.props.userName
      return (
        <input
          type="text"
          maxlength="16"
          value={this.props.userName}
          onChange={this.handleChange}
        />
      );
    }
});
