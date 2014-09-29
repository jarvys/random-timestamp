
module.exports = function(start, stop) {
	if(start.getTime() >= stop.getTime()) {
		throw new Error('Parameter Error! Start should not be later than stop');
	}

	var len = stop.getTime() - start.getTime();
	return new Date(Math.floor(Math.random() * len) + start.getTime());
}

