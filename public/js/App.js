var App = React.createClass({
    displayName: "App",

    handleHeartbeat: function (newTimestamp) {
        if (this.state.time_stamp !== newTimestamp) {
            var newState = this.state;
            newState.time_stamp = newTimestamp;
            this.setState(newState);
        }
    },
    handleParticipantList: function (newparticipantlist) {
        if (this.state.participantlist !== newparticipantlist) {
            var newState = this.state;
            newState.participantlist = newparticipantlist;
            this.setState(newState);
            console.log(newState);
        }
    },
    broadcastState: function () {
        var self = this;
        self.socket.emit('broadcastState', {
            "userId": this.state.userId,
            "sessionId": this.state.sessionId,
            "userColor": this.state.userColor,
            "userName": this.state.userName,
            "userDeltaPosition": this.state.userDeltaPosition,
            "userControlledPosition": this.state.userDeltaPosition
        });
    },
    setUserId: function (userId) {
        if (this.state.userId !== userId) {
            var newState = this.state;
            newState.userId = userId;
            this.setState(newState);
        }
    },
    setSessionId: function (sessionId) {
        if (this.state.sessionId !== sessionId) {
            var newState = this.state;
            newState.sessionId = sessionId;
            this.setState(newState);
        }
    },
    socket: io.connect(),
    socketConn: function () {
        var self = this;
        self.socket.on('connect', function () {
            let sessionId = self.socket.io.engine.id;
            self.setSessionId(sessionId);
            self.socket.emit('newUser', { "userId": sessionId, "userColor": self.state.userColor, "userName": self.state.userName });
        });
        self.socket.on('heartbeat', function (timestampval) {
            self.handleHeartbeat(timestampval);
        });
        self.socket.on('participantlist', function (participantlist) {
            self.handleParticipantList(participantlist);
        });
    },
    componentDidMount: function () {
        this.setState({ mounted: true });
        this.socketConn();
    },
    getColorArr: function () {
        let colorArr = [];
        let newColor;
        while (true) {
            randoColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            if (!(randoColor in colorArr)) {
                colorArr.push(colorArr[newColor] = randoColor);
                if (colorArr.length === 16) {
                    return colorArr;
                }
            }
        }
    },
    setUserColor: function (userColor) {
        if (this.state.userColor !== userColor) {
            var newState = this.state;
            newState.userColor = userColor;
            this.setState(newState);
        }
    },
    setUserName: function (userName) {
        if (this.state.userName !== userName) {
            var newState = this.state;
            newState.userName = userName;
            this.setState(newState);
            this.socket.emit('userName', { "userId": this.state.userId, "userName": this.state.userName });
        }
    },
    getGuid: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    },
    getInitialState: function () {
        return {
            app_name: this.props.app_name,
            time_stamp: this.props.time_stamp,
            mounted: false,
            userId: this.getGuid(),
            colorArr: this.getColorArr(),
            userName: 'xxxxx',
            userColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
            activeDrags: 0,
            deltaPosition: {
                x: 0, y: 0
            },
            controlledPosition: {
                x: -400, y: 200
            }
        };
    },
    render: function () {
        return React.createElement(Main, {
            app_name: this.state.app_name,
            participantlist: this.state.participantlist,
            time_stamp: this.state.time_stamp,
            colorArr: this.state.colorArr,
            userName: this.state.userName,
            userColor: this.state.userColor,
            setUserColor: this.setUserColor,
            setUserName: this.setUserName,
            broadcastState: this.broadcastState
        });
    }
});