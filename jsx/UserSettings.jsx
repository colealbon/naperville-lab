var UserSettings = React.createClass({
    broadcastState: function() {
        this.props.broadcastState()
    },
    render: function() {
    var circle20px = {
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        border: "2px solid black",
        backgroundColor: this.props.userColor,
    };
    var sampleCircle = (this.props.userColor) ? <div id="selected" style={circle20px}> </ div> : "";
    return (
        <section id='usersettings'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <article id='userNameinput'>
                                <UserNameInput
                                    userName={this.props.userName}
                                    setUserName={this.props.setUserName}
                                />
                                <button
                                    type="button" onClick={this.broadcastState}>
                                    submit
                                </button>
                            </article>
                        </ td>
                        <td>
                            <article id="selectedcolor">
                                <div height="26px"> {sampleCircle} </ div>
                            </ article>
                        </ td>
                    </ tr>
                </ tbody>
            </ table>
            <ColorPalette colorArr={this.props.colorArr} setUserColor={this.props.setUserColor} />
        </section>
    );
  }
});
