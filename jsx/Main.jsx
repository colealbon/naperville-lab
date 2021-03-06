var Main = React.createClass({
  render: function() {
    return (
    <main>
        <Header app_name={this.props.app_name}/>
        <UserSettings
            userName = {this.props.userName}
            colorArr = {this.props.colorArr}
            userColor = {this.props.userColor}
            setUserColor = {this.props.setUserColor}
            setUserName = {this.props.setUserName}
            broadcastState = {this.props.broadcastState}
            />
        <Stage
            key = {this.props.participantlist}
            userId = {this.props.userId}
            sessionId = {this.props.sessionId}
            participantlist = {this.props.participantlist}
            setPosition = {this.props.setPosition}
            broadcastState = {this.props.broadcastState}
            />
        <Footer time_stamp={this.props.time_stamp} />
    </main>
    );
  }
});
