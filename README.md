# debug-pest

Commonly useful logging extensions over visionmedia's debug
<br>Wraps over debug, instead of modifying anything.

### Features
1. Log levels - Drop in replacement for console, mostly (ie implements log, warn & error)
2. Easy child instances
3. Each log-level of a logger (parent or child), is its own debug instance.

### Note
1. debug-pest is a extremely light wrapper over 'debug', and is purposely setup to use 'debug' as an optional dependency - to reduce weight where debug might only be needed for testing (for eg). If 'debug' is not provided, it will disable (.enable = false) the loggers silently, without affecting your code.

2. This implementation deviates slightly from the original convention set by debug.

The topmost namespace is not your app's name, but the log level. This is to allow configs like : <br>
- ('errors:* , -logs:* , -warnings:* ') : Show all errors, but suppress logs & warnings, irrespective of module

### Usage

```javascript
const debug = require('debug');
debug.enable('*');
const debug-pest = require('debug-pest')(debug);

const parent = new debug-pest('Parent');

/* Loggers are enabled only when debug is provided.

Using "parent.enabled &&" as below is not necessary, but may be more efficient  when the loggers are disabled, than simply calling .log(), .warn(), .error() as is - because it avoids those function calls entirely.

*/
parent.enabled && parent.log('Hello. This is a log from parent');
parent.enabled && parent.warn('Hello. this is a warning from parent');
parent.enabled && parent.error('Hello. this is an error from parent');

const child = parent.child('child1');
child.enabled && child.log('Hello. This is a log from child1');
```

### Roadmap
- Output to file(s), paired with a web based filtered log viewer.
