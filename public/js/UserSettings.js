var UserSettings = React.createClass({
    displayName: "UserSettings",

    render: function () {
        var circle100px = {
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            backgroundColor: this.props.userColor
        };
        return React.createElement(
            "section",
            { id: "usersettings" },
            "user settings section ",
            this.props.userName,
            React.createElement(
                "article",
                { id: "selectedcolor" },
                React.createElement(
                    "div",
                    { id: "selected", style: circle100px },
                    " "
                )
            ),
            React.createElement(
                "article",
                { id: "userNameinput" },
                "userName input article",
                React.createElement(UserNameInput, { userName: this.props.userName, setUserName: this.props.setUserName })
            ),
            React.createElement(ColorPalette, { colorArr: this.props.colorArr, setUserColor: this.props.setUserColor })
        );
    }
});