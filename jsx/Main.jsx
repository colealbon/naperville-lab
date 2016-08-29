var Main = React.createClass({
  render: function() {
    return (
    <main>
        <Header app_name={this.props.app_name}/>
        <Stage
            userId={this.props.userId}
            participantlist={this.props.participantlist}
            setControlledPosition={this.props.setControlledPosition}
            setDeltaPosition={this.props.setDeltaPosition}
            broadcastState={this.props.broadcastState}
            />
        <UserSettings
            userName = {this.props.userName}
            colorArr = {this.props.colorArr}
            userColor = {this.props.userColor}
            setUserColor = {this.props.setUserColor}
            setUserName = {this.props.setUserName}
            broadcastState = {this.props.broadcastState}
            />
        <Footer time_stamp={this.props.time_stamp} />
    </main>
    );
  }
});
