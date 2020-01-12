var expect  = require('chai').expect;
var request = require('request');

it('Default url', function(done) {
    request('http://localhost:4000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Users url', function(done) {
    request('http://localhost:4000/users' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});