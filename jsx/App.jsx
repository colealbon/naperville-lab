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
        }
    },
    componentDidMount: function() {
        this.setState({ mounted: true });
        var self = this;
        var socket = io.connect();
        socket.on('connect', function () {
          let sessionId = socket.io.engine.id;
         // console.log('Connected ' + sessionId);
          socket.emit('newUser', {"id": sessionId, "color": '#'+Math.floor(Math.random()*16777215).toString(16)} );
        });
        socket.on('heartbeat', function (timestampval) {
            self.handleHeartbeat(timestampval);
        });
        socket.on('participantlist', function (participantlist) {
            self.handleParticipantList(participantlist);
        });
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
    getInitialState: function() {
        colorArr = this.getColorArr();
        return {
            app_name: this.props.app_name,
            time_stamp: this.props.time_stamp,
            mounted: false,
            colorArr: colorArr,
            userColor: '#'+Math.floor(Math.random()*16777215).toString(16)
        };
    },
    render: function() {
      return (
          <Main
              app_name={this.state.app_name}
              participantlist={this.state.participantlist}
              time_stamp={this.state.time_stamp}
              colorArr={this.state.colorArr}
              username={this.state.username}
              userColor={this.state.userColor}
              setUserColor={this.setUserColor}
           />
      );
    }
});
