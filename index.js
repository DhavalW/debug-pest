module.exports = function(debug){

	var logger = function (suffix) {
		this.enabled = false;
		this.prefix = suffix || '';

		if(typeof debug == 'function'){
			this.log = debug(`logs:` + this.prefix + ':root');
			this.warn = debug(`warnings:` + this.prefix + ':root');
			this.error = debug(`errors:` + this.prefix + ':root');
			this.enabled = true;
		}
	};

	logger.prototype.child = function (suffix) {
		return new logger(this.prefix + ':' + suffix);
	};

	return logger;
};
