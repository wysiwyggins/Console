const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const open = require('open');
const os = require('os');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// DMX setup only on Linux
let universe;
if (os.platform() === 'linux') {
    const DMX = require('dmx');
    const dmx = new DMX();
    universe = dmx.addUniverse('demo', 'enttec-usb-dmx-pro', '/dev/ttyUSB1');
}

// Serve static files from the public directory
app.use(express.static('public'));

// Start server and automatically open the default browser
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    open(`http://localhost:${PORT}`);
});

// WebSocket connection setup
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('requestSketchChange', (data) => {
        console.log('Request to change sketch to:', data.nextSketch);
        io.emit('changeSketch', mapSketchNameToIndex(data.nextSketch));
    });

    socket.on('sendJudgeName', (data) => {
        console.log('Last figure name received:', data.name);
    });

    socket.on('setRGBLight', (data) => {
        if (os.platform() === 'linux') {
            setRGBLight(data.red, data.green, data.blue);
        } else {
            console.log('DMX functionality not available on this platform.');
        }
    });

    socket.on('setBlackLight', (state) => {
        if (os.platform() === 'linux') {
            setBlackLight(state);
        } else {
            console.log('DMX functionality not available on this platform.');
        }
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

function setRGBLight(red, green, blue) {
    if (universe) {
        universe.update({1: red, 2: green, 3: blue});
    }
}

function setBlackLight(state) {
    if (universe) {
        universe.update({4: state ? 255 : 0});
    }
}

function mapSketchNameToIndex(sketchName) {
    const sketchMap = {
        'boot.js' : 0,
        'geomancy.js' : 1,
        'home.js' : 2,
        'game.js' : 3, 
        'abyss.js' : 4,
        'keyboard.js' : 5,
        'patterns.js' : 6,
        'mirror.js' : 7,
        'automata.js' : 8,
    };
    return sketchMap[sketchName] || 0; // Default to first sketch if name not found
}