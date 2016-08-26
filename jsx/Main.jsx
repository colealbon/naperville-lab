var Main = React.createClass({
  render: function() {
    return (
    <main>
        <span id="debuglagel" visibility="hidden">main</ span>
        <Header app_name={this.props.app_name} />
        <UserSettings username={this.props.username} colorArr={this.props.colorArr} userColor={this.props.userColor} setUserColor={this.props.setUserColor}  />
        <Stage id="o" participantlist={this.props.participantlist} size="100%"/>
        <Footer time_stamp={this.props.time_stamp} />
    </main>
    );
  }
});
