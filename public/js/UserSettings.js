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
                "table",
                null,
                React.createElement(
                    "tbody",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "article",
                                { id: "userNameinput" },
                                React.createElement(UserNameInput, { userName: this.props.userName, setUserName: this.props.setUserName }),
                                React.createElement(
                                    "button",
                                    { type: "button", onClick: this.broadcastState },
                                    "submit"
                                )
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "article",
                                { id: "selectedcolor" },
                                React.createElement(
                                    "div",
                                    { height: "26px" },
                                    " ",
                                    sampleCircle,
                                    " "
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(ColorPalette, { colorArr: this.props.colorArr, setUserColor: this.props.setUserColor })
        );
    }
});