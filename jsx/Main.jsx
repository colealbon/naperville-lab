var Main = React.createClass({
  render: function() {
    return (
    <main>
        <span id="debuglagel" visibility="hidden">main</ span>
        <Header app_name={this.props.app_name} visibility="hidden"/>
        <Stage
            userId={this.props.userId}
            participantlist={this.props.participantlist}
            setActiveDrags={this.props.setDeltaPosition}
            setDeltaPosition={this.props.setDeltaPosition}
            setControlledPosition={this.props.setControlledPosition}
            broadcastState={this.props.broadcastState}
            />
        <UserSettings
            userName={this.props.userName}
            colorArr={this.props.colorArr}
            userColor={this.props.userColor}
            setUserColor={this.props.setUserColor}
            setUserName={this.props.setUserName}
            broadcastState={this.props.broadcastState}
            />
        <Stage0 />
        <Footer time_stamp={this.props.time_stamp} />
    </main>
    );
  }
});
