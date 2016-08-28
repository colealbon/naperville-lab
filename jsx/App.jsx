var App = React.createClass({
    handleHeartbeat: function(newTimestamp) {
        if (this.state.time_stamp !== newTimestamp) {
            var newState = this.state;
            newState.time_stamp = newTimestamp;
            this.setState(newState);
        }
    },
    handleParticipantList: function(newparticipantlist) {
        if (this.state.participantlist !== newparticipantlist) {
            var newState = this.state;
            newState.participantlist = newparticipantlist;
            this.setState(newState);
            console.log(newState)
        }
    },
    broadcastState: function() {
        var self = this;
        self.socket.emit('broadcastState', {
            "userId": this.state.userId,
            "sessionId": this.state.sessionId,
            "userColor": this.state.userColor,
            "userName": this.state.userName,
            "controlledPosition": this.state.controlledPosition,
            }
        );
    },
    setUserId: function(userId) {
        if (this.state.userId !== userId) {
            var newState = this.state;
            newState.userId = userId;
            this.setState(newState);
        }
    },
    setSessionId: function(sessionId) {
        if (this.state.sessionId !== sessionId) {
            var newState = this.state;
            newState.sessionId = sessionId;
            this.setState(newState);
        }
    },
    socket: io.connect(),
    socketConn: function() {
        var self = this;
        self.socket.on('connect', function () {
          let sessionId = self.socket.io.engine.id;
          self.setSessionId(sessionId);
          self.broadcastState()
        });
        self.socket.on('heartbeat', function (timestampval) {
            self.handleHeartbeat(timestampval);
        });
        self.socket.on('participantlist', function (participantlist) {
            self.handleParticipantList(participantlist);
        });
    },
    componentDidMount: function() {
        this.setState({ mounted: true });
        this.socketConn()
    },
    getColorArr: function() {
        let colorArr = [];
        let newColor;
        while (true) {
            randoColor = '#'+Math.floor(Math.random()*16777215).toString(16)
            if (!(randoColor in colorArr)) {
                colorArr.push(colorArr[newColor] = randoColor)
                if (colorArr.length === 16 ) {
                    return colorArr;
                }
            }
        }
    },
    setUserColor: function(userColor) {
        if (this.state.userColor !== userColor) {
            var newState = this.state;
            newState.userColor = userColor;
            this.setState(newState);
        }
    },
    setUserName: function(userName) {
        if (this.state.userName !== userName) {
            var newState = this.state;
            newState.userName = userName;
            this.setState(newState);
        }
    },
    getGuid: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
            });
    },
    setControlledPosition: function(controlledPosition) {
        if (this.state.controlledPosition !== controlledPosition) {
            var newState = this.state;
            newState.controlledPosition = controlledPosition;
            this.setState(newState);
        }
    },
    setDeltaPosition: function(deltaPosition) {
        if (this.state.deltaPosition !== deltaPosition) {
            var newState = this.state;
            newState.deltaPosition = deltaPosition;
            this.setState(newState);
        }
    },
    setActiveDrags: function(activeDrags) {
        if (this.state.activeDrags !== activeDrags) {
            var newState = this.state;
            newState.activeDrags = activeDrags;
            this.setState(newState);
        }
    },
    getInitialState: function() {
        return {
            app_name: this.props.app_name,
            time_stamp: this.props.time_stamp,
            participantlist: '[{}]',
            mounted: false,
            userId: this.getGuid(),
            colorArr: this.getColorArr(),
            userName: 'xxxxx',
            userColor: '#'+Math.floor(Math.random()*16777215).toString(16),
            activeDrags: 0,
            deltaPosition: {
              x: 0, y: 0
            },
            controlledPosition: {
              x: -400, y: 200
            }
        };
    },
    render: function() {
      return (
          <Main
              app_name={this.state.app_name}
              participantlist={this.state.participantlist}
              time_stamp={this.state.time_stamp}
              userId={this.state.userId}
              colorArr={this.state.colorArr}
              userName={this.state.userName}
              userColor={this.state.userColor}
              setUserColor={this.setUserColor}
              setUserName={this.setUserName}
              setActiveDrags={this.setDeltaPosition}
              setDeltaPosition={this.setDeltaPosition}
              setControlledPosition={this.setControlledPosition}
              broadcastState={this.broadcastState}
           />
      );
    }
});
