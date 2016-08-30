var Main = React.createClass({
    displayName: "Main",

    render: function () {
        return React.createElement(
            "main",
            null,
            React.createElement(Header, { app_name: this.props.app_name }),
            React.createElement(UserSettings, {
                userName: this.props.userName,
                colorArr: this.props.colorArr,
                userColor: this.props.userColor,
                setUserColor: this.props.setUserColor,
                setUserName: this.props.setUserName,
                broadcastState: this.props.broadcastState
            }),
            React.createElement(Stage, {
                key: this.props.participantlist,
                userId: this.props.userId,
                sessionId: this.props.sessionId,
                participantlist: this.props.participantlist,
                setDeltaPosition: this.props.setDeltaPosition,
                broadcastState: this.props.broadcastState
            }),
            React.createElement(Footer, { time_stamp: this.props.time_stamp })
        );
    }
});