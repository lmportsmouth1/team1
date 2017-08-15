"use strict";

var assert = require('assert'); 
var Roman = require('./roman.js');

describe("Fizz Buzz Tests", function () {
    
    it("", function(done) { 
        var converted = new Roman().convertToRoman(1);
        assert(converted=='I', "To be implemented");//learning here
        done();
    });
    
});