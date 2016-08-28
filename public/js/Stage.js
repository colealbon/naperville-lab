var Stage = React.createClass({
    displayName: 'Stage',

    render: function () {
        var onStart = this.props.onStart;
        var onStop = this.props.onStop;
        var handleDrag = this.props.handleDrag;
        var broadcastState = this.props.broadcastState;
        var users = this.props.participantlist ? this.props.participantlist : '[{}]';
        var usersArr = eval('(' + users + ')');
        var editorUserId = this.props.userId ? this.props.userId : '';
        var editorDeltaPosition = this.props.deltaPosition;
        var editorControlledPosition = this.props.controlledPosition;
        var editorActiveDrags = this.props.activeDrags;
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
                onStart: this.onStart,
                onStop: this.onStop,
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