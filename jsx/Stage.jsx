var Stage = React.createClass({
    render: function() {
        //console.log('partipantlist',this.props.participantlist)
        var users = (this.props.participantlist) ? this.props.participantlist : '[{}]';
        var usersArr = eval('(' + users + ')');
        var userCircles = usersArr.map(function(user) {
            return (<UserCircle
                key={user.userId}
                userId={user.userId}
                userName={user.userName}
                userColor={user.userColor}
                userDeltaPosition={user.userDeltaPosition}
                userControlledPosition={user.userControlledPosition}
                />
                )
        })
        return (
            <section id="stage" class="stage" style={{width: "20%"}} >
                stage section
                {userCircles}
            </section>
        );
    }
});
