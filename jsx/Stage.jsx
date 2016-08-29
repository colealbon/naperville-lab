var Stage = React.createClass({
    render: function() {
        var users = (this.props.participantlist) ? this.props.participantlist : '[{}]'
        var usersArr = eval('(' + users + ')')
        var editorUserId = (this.props.userId) ? this.props.userId : '';
        var setDeltaPosition = this.props.setDeltaPosition
        var broadcastState = this.props.broadcastState
        var deltaPosition = this.props.deltaPosition
        var self = this;
        var userCircles = usersArr.map(function(user) {
            return (<UserCircle
                key = {user.userId}
                editorUserId = {editorUserId}
                userId = {user.userId}
                userName = {user.userName}
                userColor = {user.userColor}
                userDeltaPosition = {user.deltaPosition}
                setDeltaPosition = {self.setDeltaPosition}
                broadcastState = {self.broadcastState}
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
