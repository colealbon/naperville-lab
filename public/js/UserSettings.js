var UserSettings = React.createClass({
    displayName: "UserSettings",

    broadcastState: function () {
        this.props.broadcastState();
    },
    render: function () {
        var circle20px = {
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            border: "2px solid black",
            backgroundColor: this.props.userColor
        };
        var sampleCircle = this.props.userColor ? React.createElement(
            "div",
            { id: "selected", style: circle20px },
            " "
        ) : "";
        return React.createElement(
            "section",
            { id: "usersettings" },
            React.createElement(
                "article",
                { id: "selectedcolor" },
                sampleCircle
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