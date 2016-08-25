# installation
```
git clone https://github.com/colealbon/naperville-lab.git  
cd naperville-lab;  
cp config/options.js.example config/options.js  
npm install  
npm start  
```
# for developers
### transpile jsx source files to js files
```
node ./node_modules/babel-cli/bin/babel.js --watch --presets react jsx --out-dir ./public/js
```
*comment out stylesheets/wireframe.css in views/index.swig to remove menacing borders*

# usage
0. navigate to localhost:3000    
0. drag the colored dot around the screen    
0. open a new window at localhost:3000    
0. you should now have 2 dragable dots    
0. refresh button resets the dot positions   

# status (partially completed)  
* <s>javascript program running under node.js</s>   
* input your name limited to 16 characters
* there must be at least 8 color patches to choose from
* user can select a color by clicking on one of the patches
* <s>different users can be logged in on same machine or different machines</s>
* circle position communication between client and server must be through websocket
* when a user closes the browser tab, circle must disappear for other users
* when a user logs in the initial screen must show all connected circles
* when a user moves a circle,  the circle must move on other user's screens
* <s>client side application must have no memory of the last user</s>
* <s>store the users data on the server in volatile fashion</s>
* <s>server side application must combine http and socket servers</s>
* the client should be able to run remotely from the server
* <s>server side file paths must be relative</s>