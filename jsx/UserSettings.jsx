var UserSettings = React.createClass({
    render: function() {
    var circle100px = {
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        backgroundColor: this.props.userColor,
    };
    return (
    <section id='usersettings'>
        user settings section {this.props.username}
        <article id="selectedcolor">
        <div id="selected" style={circle100px}> </ div>
        </ article>
        <article id='usernameinput'>
        username input article
        <UserNameInput username={this.props.username} />
        </article>
        <ColorPalette colorArr={this.props.colorArr} setUserColor={this.props.setUserColor}/>
    </section>
    );
  }
});
