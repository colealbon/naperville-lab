var UserSettings = React.createClass({
    displayName: "UserSettings",

    broadcastState: function () {
        this.props.broadcastState();
    },
    render: function () {
        var circle100px = {
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            border: "5px solid black",
            backgroundColor: this.props.userColor
        };
        return React.createElement(
            "section",
            { id: "usersettings" },
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
                React.createElement(UserNameInput, { userName: this.props.userName, setUserName: this.props.setUserName }),
                React.createElement(
                    "button",
                    { type: "button", onClick: this.broadcastState },
                    "submit"
                )
            ),
            React.createElement(ColorPalette, { colorArr: this.props.colorArr, setUserColor: this.props.setUserColor })
        );
    }
});