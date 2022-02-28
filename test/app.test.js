process.env.NODE_ENV = 'test';


//require dev depencies

let chai = require('chai');
let chaiHttp = require('chai-http');
// let server = require('../server');
let should = chai.should();


chai.use(chaiHttp)


describe('Etfs', () => {
    // test the /get route

    describe('/GET getAllEtfs', () => {
        it('should GET all the etfs', (done) => {
            chai.request("https://db-user-etf.herokuapp.com").get('/etf').end((err, res) => {
                console.log(res)
                res.should.have.status(200);
                done();
            })
        });

        // describe('/GET/:id getOneEtf', () => {
        //     it('it should GET a etf with a given id', (done) => {

        //     })
        //     it('should GET 404 error if course is not found', (done) => {

        //     })
        // })
    })
})