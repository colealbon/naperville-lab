var Stage = React.createClass({
    render: function() {
        var users = (this.props.participantlist) ? this.props.participantlist : '[{}]'
        var usersArr = eval('(' + users + ')')
        var editorUserId = (this.props.userId) ? this.props.userId : '';
        var sessionId = this.props.sessionId
        var setPosition = this.props.setPosition
        var broadcastState = this.props.broadcastState
        var userCircles = usersArr.map(function(user) {
            return (<UserCircle
                key = {user.userId}
                editorUserId = {editorUserId}
                userId = {user.userId}
                userName = {user.userName}
                userColor = {user.userColor}
                sessionID = {sessionId}
                position = {user.position}
                setPosition = {setPosition}
                broadcastState = {broadcastState}
                />
            )
        })
        return (
            <section id="stage" class="stage">
                {userCircles}
            </section>
        );
    }
});
