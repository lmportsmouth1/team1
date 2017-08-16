"use strict";

var assert = require('assert'); 
var Roman = require('./roman.js');

describe("Fizz Buzz Tests", function () {
    
    function checkResult(input, expected, testDescription) {
        console.log("The input was: " + input);
        var converted = new Roman().convertToRoman(input);
        console.log("The output is: " + converted);
        assert(converted==expected, testDescription);
    }
    
    it("", function(done) { 
        checkResult(1 ,"I","Should be I");
        done();
    });
    
    it("", function(done) { 
        checkResult(5 ,"V","Should be V");
        done();
    });
    
    it("", function(done) { 
       checkResult(922 ,"IX","should be IX");
        done();
    });
    
    it("", function(done) {
        checkResult(40 ,"XL","Should be XL");
        done();
    });0
    
});