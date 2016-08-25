var App = React.createClass({
    displayName: 'App',

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
            //console.log(newState.participantlist)
            //document.getElementById('timestamp').innerHTML = newState.participantList;
        }
    },
    componentDidMount: function () {
        this.setState({ mounted: true });
        var self = this;
        var socket = io.connect();
        socket.on('connect', function () {
            let sessionId = socket.io.engine.id;
            console.log('Connected ' + sessionId);
            socket.emit('newUser', { "id": sessionId, "color": '#' + Math.floor(Math.random() * 16777215).toString(16) });
            //socket.emit('newUser', {id: sessionId, name: $('#name').val()});
        });
        socket.on('heartbeat', function (timestampval) {
            self.handleHeartbeat(timestampval);
        });
        socket.on('participantlist', function (participantlist) {
            self.handleParticipantList(participantlist);
        });
    },
    getInitialState: function () {
        return {
            app_name: this.props.app_name,
            time_stamp: this.props.time_stamp,
            mounted: false
        };
    },
    render: function () {
        return React.createElement(Main, { app_name: this.state.app_name, participantlist: this.state.participantlist, time_stamp: this.state.time_stamp });
    }
});