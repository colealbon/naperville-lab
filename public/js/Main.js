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
            React.createElement(Header, { app_name: this.props.app_name, visibility: "hidden" }),
            React.createElement(Stage, {
                userId: this.props.userId,
                participantlist: this.props.participantlist,
                setActiveDrags: this.props.setDeltaPosition,
                setDeltaPosition: this.props.setDeltaPosition,
                setControlledPosition: this.props.setControlledPosition,
                broadcastState: this.props.broadcastState
            }),
            React.createElement(UserSettings, {
                userName: this.props.userName,
                colorArr: this.props.colorArr,
                userColor: this.props.userColor,
                setUserColor: this.props.setUserColor,
                setUserName: this.props.setUserName,
                broadcastState: this.props.broadcastState
            }),
            React.createElement(Stage0, null),
            React.createElement(Footer, { time_stamp: this.props.time_stamp })
        );
    }
});