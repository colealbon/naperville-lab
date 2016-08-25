var UserSettings = React.createClass({
    render: function() {
    var circle100px = {
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16),
    };
    return (
    <section id='usersettings'>
        user settings section
        <ColorCircle size="100px" />
        <ColorPalette />
        // textbox
    </section>
    );
  }
});
