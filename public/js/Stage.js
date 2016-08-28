var Stage = React.createClass({
    displayName: 'Stage',

    render: function () {
        var setActiveDrags = this.props.setActiveDrags;
        var setDeltaPosition = this.props.setDeltaPosition;
        var setControlledPosition = this.props.setControlledPosition;
        var broadcastState = this.props.broadcastState;
        var users = this.props.participantlist ? this.props.participantlist : '[{}]';
        var usersArr = eval('(' + users + ')');
        var editorUserId = this.props.userId ? this.props.userId : '';
        var userCircles = usersArr.map(function (user) {
            return React.createElement(UserCircle, {
                key: user.userId,
                editorUserId: editorUserId,
                userId: user.userId,
                userName: user.userName,
                userColor: user.userColor,
                activeDrags: user.activeDrags,
                deltaPosition: user.deltaPosition,
                controlledPosition: user.controlledPosition,
                setActiveDrags: setActiveDrags,
                setDeltaPosition: setDeltaPosition,
                setControlledPosition: setControlledPosition,
                broadcastState: broadcastState
            });
        });
        return React.createElement(
            'section',
            { id: 'stage', 'class': 'stage' },
            'stage section',
            userCircles
        );
    }
});