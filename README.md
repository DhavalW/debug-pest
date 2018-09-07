# debug-pest

Commonly useful logging extensions over visionmedia's debug
<br>Wraps over debug, instead of modifying anything.

### Features
1. Log levels - Drop in replacement for console, mostly (ie implements log, warn & error)
2. Easy child instances
3. Each log-level of a logger (parent or child), is its own debug instance.

### Usage

```javascript
const debug = require('debug');
debug.enable('*');
const debug-pest = require('debug-pest')(debug);

const parent = new debug-pest('Parent');
parent.log('Hello. This is a log from parent');
parent.warn('Hello. this is a warning from parent');
parent.error('Hello. this is an error from parent');

const child = parent.child('child1');
child.log('Hello. This is a log from child1');
```

### Note
This implementation deviates slightly from the norm set by debug. The topmost namespace is not your app's name, but the log level. This is to allow configs like : <br>
- ('errors:* , -logs:* , -warnings:* ') : Show all errors, but suppress logs & warnings, irrespective of module

### Roadmap
- Output to file(s), paired with a web based filtered log viewer.
