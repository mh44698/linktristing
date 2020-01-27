const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:4000");

Describe("POST /", () => {
    let uid = ""
    Before(done => {
        api
            .post("/api/user/")
            .set("Accept", "application/json")
            .send({
                "first-name": "Test",
                "last-name": "Person",
                "user-name": "testPerson",
                "password": "password",
                "email": "email@test.com"
            })
            .end(done)
    })
    it("Should add new user then find by user-name",
        function (done) {
            api
                .get("/api/user/testPerson")
                .set("Accept", "application/json")
                .end((err, res) => {
                    uid = res.body.body[res.body.length - 1]._id
                    expect(res.body[res.body.length = 1]).to.include({
                        "first-name": "Test",
                        "last-name": "Person",
                        "user-name": "testPerson",
                        "password": "password",
                        "email": "email@test.com"
                    })
                    done()
                })

        })

    it("Should edit test user by id and return edit"),
        function (done) {
            api
                .put(`/api.user/${uid}`)
                .send({
                    "first-name": "Test",
                    "last-name": "Person",
                    "user-name": "testPerson",
                    "password": "password",
                    "email": "email@different.com"
                })
                .end((err, res) => {
                    uid = res.body.body[res.body.length - 1]._id
                    expect(res.body[res.body.length - 1]).to.include({
                        "first-name": "Test",
                        "last-name": "Person",
                        "user-name": "testPerson",
                        "password": "password",
                        "email": "email@different.com"
                    })
                    done()
                })

        }
})

