// Courtesy of [stygstra](https://gist.github.com/514983)
var fs = require("fs");
var path = require("path");

module.exports = (function() {
	var counter = 0;
	var walk = function(dirname, options, callbacks) {
		var callbacks = callbacks || {};

		options = options || {};
		if (typeof callbacks.finished !== 'function') { callbacks.finished = function(){}; }
		if (typeof callbacks.file !== 'function') { callbacks.file = function(){}; }

		counter += 1;
		fs.readdir(dirname, function(err, relnames) {
			if(err) {
				callbacks.finished(err);
				return;
			}

			relnames.forEach(function(relname, index, relnames) {
				var name = path.join(dirname, relname);
				counter += 1;

				fs.stat(name, function(err, stat) {
					if(err) {
						callbacks.finished(err);
						return;
					}

					if(stat.isDirectory() && !name.match('.svn')) {
						walk(name, options, callbacks);
					} else {
						if (!options.mask || name.match(options.mask)) {
							callbacks.file(name);
						}
					}

					counter -= 1;
					if(index === relnames.length - 1) counter -= 1;
					
					if(counter === 0) {
						callbacks.finished(null);
					}
				});
			});
		});
	};
	return walk;
})();