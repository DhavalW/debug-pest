const debug = require('debug');
debug.enable('*');

const debugTool = require('../index.js')(debug);


var logger = new debugTool('app');
var child1 = logger.child('child1');
logger.log('Hello there. this is App root');
child1.log('Hello there. I am child1');
