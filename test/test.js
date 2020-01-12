let chai  = require('chai');
let chaiHttp = require('chai-http');
let server = require('../bin/www');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe('/GET /', () => {
    it('it should GET the default user', (done) => {
        chai.request('http://localhost:4000')
            .get('/')
            .end((err,res) => {
                //console.info(res);
                res.should.have.status(200);                
                res.body.data.should.an('array');
                done();
            })
});

it('Users url', function(done) {
    chai.request('http://localhost:4000')
        .get('/users')
        .end((err,res) =>{
            res.should.have.status(200);                
            res.body.data.should.an('array');
            done();
        })
});
})

