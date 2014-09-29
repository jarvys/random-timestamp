var assert = require('assert');
var randomTimestamp = require('./index');

describe('random-timestamp', function() { 
	it('should throw errors when start is later than stop', function() {
		assert.throws(function() {
			var now = new Date();
			var date = new Date(now.getTime() - 1);
			randomTimestmap(now, date);
		}, function() {
			return true;
		});
	});

	it('should be correct...', function() {
		// TODO better test needed
		var now = new Date();
		var start = new Date(now.getTime() - 1000 * 1000);
		var results = [];
		for(var i = 0; i < 1000; i++) {
			results.push(randomTimestamp(start, now));
		}

		var wrongDates = results.filter(function(item) {
			return item.getTime() < start.getTime() || item.getTime() >= now.getTime();
		});

		assert.ok(wrongDates.length === 0);
	});
});
