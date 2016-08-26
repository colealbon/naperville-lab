var Stage = React.createClass({
    render: function() {
        console.log('partipantlist',this.props.participantlist)
        var users = (this.props.participantlist) ? this.props.participantlist : '[{}]';
        var size = this.props.size;
        var usersArr = eval('(' + users + ')');

        var userCircles = usersArr.map(function(user) {
            return <UserCircle key={user.id} id={user.id} label={user.UserName} color={user.color} size="20px" />
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
