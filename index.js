module.exports = function(debug){

	var logger = function (name) {
		this.enabled = false;
		this.name = name || '';

		if(typeof debug == 'function'){
			this.log = debug(`logs:` + this.name);
			this.warn = debug(`warnings:` + this.name);
			this.error = debug(`errors:` + this.name);
			this.enabled = true;
		}
		else{
			this.log = ()=>{};
			this.warn = ()=>{};
			this.error = ()=>{};
			this.enabled = false;
		}
	};

	logger.prototype.child = function (name) {
		return new logger(this.name + ':' + name);
	};

	return logger;
};
