var Stage = React.createClass({
    render: function() {
        var users = (this.props.participantlist) ? this.props.participantlist : '[{}]';
        var usersArr = eval('(' + users + ')');
        var userCircles = usersArr.map(function(user) {
            return <ColorCircle key={user.id} id={user.id} color={user.color} size="20px" />
        })
        console.log(userCircles)
        return (
            <section class="stage">
                stage section
                {userCircles}
            </section>
        );
    }
});
