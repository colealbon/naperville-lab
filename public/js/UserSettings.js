var UserSettings = React.createClass({
    displayName: "UserSettings",

    render: function () {
        var circle100px = {
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16)
        };
        return React.createElement(
            "section",
            { id: "usersettings" },
            "user settings section",
            React.createElement(ColorCircle, { size: "100px" }),
            React.createElement(ColorPalette, null),
            "// textbox"
        );
    }
});