module.exports = function(debug){

	var logger = function (suffix) {
		this.enabled = false;
		this.prefix = suffix || '';

		if(typeof debug == 'function'){
			this.log = debug(`logs:` + this.prefix);
			this.warn = debug(`warnings:` + this.prefix);
			this.error = debug(`errors:` + this.prefix);
			this.enabled = true;
		}
		else{
			this.log = ()=>{};
			this.warn = ()=>{};
			this.error = ()=>{};
			this.enabled = false;
		}
	};

	logger.prototype.child = function (suffix) {
		return new logger(this.prefix + ':' + suffix);
	};

	return logger;
};
