var Stage = React.createClass({
    displayName: 'Stage',

    render: function () {
        var users = this.props.participantlist ? this.props.participantlist : '[{}]';
        var usersArr = eval('(' + users + ')');
        var editorUserId = this.props.userId ? this.props.userId : '';
        var sessionId = this.props.sessionId;
        var setDeltaPosition = this.props.setDeltaPosition;
        var broadcastState = this.props.broadcastState;
        var userCircles = usersArr.map(function (user) {
            return React.createElement(UserCircle, {
                key: user.userId,
                editorUserId: editorUserId,
                userId: user.userId,
                userName: user.userName,
                userColor: user.userColor,
                sessionID: sessionId,
                userDeltaPosition: user.deltaPosition,
                setDeltaPosition: setDeltaPosition,
                broadcastState: broadcastState
            });
        });
        return React.createElement(
            'section',
            { id: 'stage', 'class': 'stage' },
            userCircles
        );
    }
});