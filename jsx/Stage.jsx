var Stage = React.createClass({
    render: function() {
        var users = (this.props.participantlist) ? this.props.participantlist : '[{}]';
        var size = this.props.size;
        var usersArr = eval('(' + users + ')');

        var userCircles = usersArr.map(function(user) {
            return <UserCircle key={user.id} id={user.id} color={user.color} size="20px" />
        })
        var stageStyle = {
            width: "20%",
            height: this.props.size,
         };
        return (
            <section id="stage" class="stage" style={stageStyle} >
                stage section
                {userCircles}
            </section>
        );
    }
});
