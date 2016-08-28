var UserSettings = React.createClass({
    broadcastState: function() {
        this.props.broadcastState()
    },
    render: function() {
    var circle100px = {
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        border: "5px solid black",
        backgroundColor: this.props.userColor,
    };
    console.log(this.props.userColor)
    var sampleCircle = (this.props.userColor) ? "" : <div id="selected" style={circle100px}> </ div>;
    return (
    <section id='usersettings'>
        <article id="selectedcolor">
        {sampleCircle}
        </ article>
        <article id='userNameinput'>
        <UserNameInput userName={this.props.userName} setUserName={this.props.setUserName} />
        <button type="button" onClick={this.broadcastState}>submit</button>
        </article>
        <ColorPalette colorArr={this.props.colorArr} setUserColor={this.props.setUserColor} />
    </section>
    );
  }
});
