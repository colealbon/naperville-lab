var Main = React.createClass({
  render: function() {
    return (
    <main>
        <span id="debuglagel" visibility="hidden">main</ span>
        <Header app_name={this.props.app_name} />
        <UserSettings
            userName={this.props.userName}
            colorArr={this.props.colorArr}
            userColor={this.props.userColor}
            setUserColor={this.props.setUserColor}
            setUserName={this.props.setUserName}
            broadcastState={this.props.broadcastState}
            />
        <Stage
            participantlist={this.props.participantlist}
            broadcastState={this.props.broadcastState}
            />
        <Footer time_stamp={this.props.time_stamp} />
    </main>
    );
  }
});
