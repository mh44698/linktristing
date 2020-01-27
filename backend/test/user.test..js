const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:4000");

describe("GET /api/user/", () => {
    it("Should return a 200 response", done => {
        api
            .get("/")
            .set("Accept", "application/json")
            .expect(200, done);
    });
    it("should return an array", done => {
        api
            .get("/")
            .set("Accept", "application/json")
            .end((err, res) => {
                expect(res.body).to.be.an("array");
                done();
            });
    });
    it("should return an array of objects that have a field called 'username'", done => {
        api
            .get("/")
            .set("Accept", "application/json")
            .end((err, res) => {
                expect(res.body.every(i => i.username)).to.be.true;
                done();
            });
    });
});

// describe("POST /", () => {
//     let uid = ""
//     before(done => {
//         api
//             .post("/api/user/")
//             .set("Accept", "application/json")
//             .send({
//                 "first-name": "Test",
//                 "last-name": "Person",
//                 "user-name": "testPerson",
//                 "password": "password",
//                 "email": "email@test.com"
//             })
//             .end(done)
//     })
//     it("Should add new user then find by user-name",
//         function (done) {
//             api
//                 .get("/api/user/testPerson")
//                 .set("Accept", "application/json")
//                 .end((err, res) => {
//                     uid = res.body.body[res.body.length - 1]._id
//                     expect(res.body[res.body.length = 1]).to.include({
//                         "first-name": "Test",
//                         "last-name": "Person",
//                         "user-name": "testPerson",
//                         "password": "password",
//                         "email": "email@test.com"
//                     })
//                     done()
//                 })

//         })

//     it("Should edit test user by id and return edit"),
//         function (done) {
//             consdole.log(uid)
//             api
//                 .put(`/api.user/${uid}`)
//                 .send({
//                     "first-name": "Test",
//                     "last-name": "Person",
//                     "user-name": "testPerson",
//                     "password": "password",
//                     "email": "email@different.com"
//                 })
//                 .end((err, res) => {
//                     uid = res.body.body[res.body.length - 1]._id
//                     expect(res.body[res.body.length - 1]).to.include({
//                         "first-name": "Test",
//                         "last-name": "Person",
//                         "user-name": "testPerson",
//                         "password": "password",
//                         "email": "email@different.com"
//                     })
//                     done()
//                 })

//         }
// })

