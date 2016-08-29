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
            userId={this.props.userId}
            participantlist={this.props.participantlist}
            setDeltaPosition = {this.props.setDeltaPosition}
            />
        <Footer time_stamp={this.props.time_stamp} />
    </main>
    );
  }
});
