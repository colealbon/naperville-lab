var Main = React.createClass({
  displayName: "Main",

  render: function () {
    return React.createElement(
      "main",
      null,
      React.createElement(
        "span",
        { id: "debuglagel", visibility: "hidden" },
        "main"
      ),
      React.createElement(Header, { app_name: this.props.app_name }),
      React.createElement(UserSettings, null),
      React.createElement(Stage, { id: "o", participantlist: this.props.participantlist, size: "100%" }),
      React.createElement(Footer, { time_stamp: this.props.time_stamp })
    );
  }
});