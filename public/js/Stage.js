var Stage = React.createClass({
    displayName: 'Stage',

    render: function () {
        var users = this.props.participantlist ? this.props.participantlist : '[{}]';
        var usersArr = Array.from(eval('(' + users + ')'));
        var editorUserId = this.props.userId ? this.props.userId : '';
        var sessionId = this.props.sessionId;
        var setPosition = this.props.setPosition;
        var broadcastState = this.props.broadcastState;
        var userCircles = usersArr.map(function (user) {
            console.log('---', user);
            return React.createElement(UserCircle, {
                key: user.userId,
                editorUserId: editorUserId,
                userId: user.userId,
                userName: user.userName,
                userColor: user.userColor,
                sessionID: sessionId,
                position: user.position,
                setPosition: setPosition,
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