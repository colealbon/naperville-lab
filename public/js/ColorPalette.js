var ColorPalette = React.createClass({
    displayName: "ColorPalette",

    paletteCircles: function () {
        var userColor = this.props.userColor;
        var setUserColor = this.props.setUserColor;
        return this.props.colorArr.map(function (circleColor) {
            return React.createElement(
                "td",
                { key: circleColor },
                React.createElement(PaletteCircle, { circleColor: circleColor, circleSize: "20px", userColor: userColor, setUserColor: setUserColor })
            );
        });
    },
    render: function () {
        var i = 0;
        return React.createElement(
            "article",
            { id: "colorpalette" },
            "color palette section",
            React.createElement(
                "table",
                null,
                React.createElement(
                    "tbody",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        this.paletteCircles()
                    )
                )
            )
        );
    }
});