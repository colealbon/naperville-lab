var Main = React.createClass({
  render: function() {
    return (
    <main>
        main
        <Header app_name={this.props.app_name} />
        <UserSettings />
        <Stage participantlist={this.props.participantlist} />
        <Footer time_stamp={this.props.time_stamp} />
    </main>
    );
  }
});
