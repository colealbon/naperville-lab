```
git clone https://github.com/colealbon/naperville-lab.git
cd naperville-lab;
cp config/options.js.example config.options.js
npm install
# transpile jsx source files to js files
node ./node_modules/babel-cli/bin/babel.js --watch --presets react jsx --out-dir ./public/js
npm start
```

navigate to localhost:3000    
drag the colored dot around the screen    
open ac new window at localhost:3000    
you should now have 2 dragable dots    
refresh button resets the dot positions    

status (partially completed)  
socketio relays client presence   
socketio does not relay dot positions  
login name input not set up  
color selector and example color not set up   
client is not aware if a dot is itself  
everybody can drag everybody's dots on the system.  
comment out stylesheets/wireframe.css line 6 in views/index.swig to remove menacing borders
