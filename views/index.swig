<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="shortcut icon" href="favicon.ico" />
    <meta http-equiv="CONTENT-TYPE" content="text/html" charset="utf-8">
    <title>{{ app_name }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" type="text/css" href="stylesheets/wireframe.css">
    <script src="/js/socket.io-1.4.5.js"></script>
</head>
<body class="w3-container">
    <div id="app"></div>
    <script src="js/react-15.0.1.js"></script>
    <script src="js/react-dom-15.0.1.js"></script>
    <script src="js/react-draggable.js"></script>
    <script src="js/Header.js"></script>
    <script src="js/Timestamp.js"></script>
    <script src="js/Footer.js"></script>
    <script src="js/UserCircle.js"></script>
    <script src="js/PaletteCircle.js"></script>
    <script src="js/ColorPalette.js"></script>
    <script src="js/UserNameInput.js"></script>
    <script src="js/UserSettings.js"></script>
    <script src="js/Stage0.js"></script>
    <script src="js/Stage.js"></script>
    <script src="js/Main.js"></script>
    <script src="js/App.js"></script>
    <script>
        ReactDOM.render(React.createElement(App, time_stamp="{{ time_stamp }}", app_name="{{ app_name }}"),
            document.getElementById('app')
          );
    </script>
</body>
</html>
