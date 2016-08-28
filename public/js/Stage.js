var Stage = React.createClass({
    displayName: 'Stage',

    render: function () {
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
                handleDrag: this.handleDrag,
                editorDeltaPosition: this.deltaPosition,
                editorControlledPosition: this.controlledPosition,
                editorActiveDrags: this.activeDrags,
                broadcastState: this.broadcastState
            });
        });
        return React.createElement(
            'section',
            { id: 'stage', 'class': 'stage' },
            userCircles
        );
    }
});