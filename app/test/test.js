var assert = require("power-assert");

describe("test sample", function(){
	it('should return index when the value is present', function(){
		var arr = [1,2,3];
		assert(arr.indexOf(1) === 0);
	});
});