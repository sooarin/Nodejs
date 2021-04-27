var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('#Assert Test', function () {
    it('assert - Array', function () {
        var str = 'Awesome!!';
        var obj = {
            assertion: ['assert', 'expect', 'should'],
            framework: 'mocha'
        };
        assert.equal(str, 'Awesome!!');
        assert.typeOf(str, 'String');
        assert.lengthOf(obj.assertion, 3);
    });
});