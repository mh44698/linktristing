const expect = require("chai").expect
const supertest = require("supertest")
const api = supertest("http://localhost:8080")

let colId = ""
let linkId = ""
let uId = ""

function setLinkId(str) {
    return linkId = str
}

function getLinkId() {
    return linkId
}

function setColId(str) {
    return colId = str
}

function getColId() {
    return colId
}

function setUId(str) {
    return uId = str
}

function getUId() {
    return uId
}

describe("GET /api/link/", () => {
    it("Should return a 200 response", done => {
        api
            .get("/api/link")
            .set("Accept", "application/json")
            .expect(200, done)
    })
    it("should return an array", done => {
        api
            .get("/api/link")
            .set("Accept", "application/json")
            .end((err, res) => {
                expect(res.body).to.be.an("array")
                done()
            })
    })
    it("should return an array of objects that have a field called 'link'", done => {
        api
            .get("/api/link")
            .set("Accept", "application/json")
            .end((err, res) => {
                expect(res.body.every(i => i.link)).to.be.true;
                done()
            })
    })
})

describe("POST /", () => {

    before(done => {
        api
            .post("/api/user")
            .set("Accept", "application/json")
            .send({
                firstname: "Test",
                lastname: "Person",
                username: "collectionPerson",
                password: "password"
            })
            .then(res => {
                setUId(res._id)
            })
            .end(done)
    })
    before(done => {
        api
            .post("api/collection/")
            .set("Accept", " application/json")
            .send({
                title: "Test collection",
                description: "list of links",
                parent: getUId()
            })
            .then(res => {
                setColId(res._id)
            })
            .end(done)
    })
    before(done => {
        api
            .post("/api/link")
            .set("Accept", "application/json")
            .send({
                title: "Test",
                link: "mylink.com",
            })
            .end(done)
    })
    it("Should add new user and collection and link then return link", function (done) {
        let link = getLinkId()
        api
            .get(`/api/link/${link}`)
            .set("Accept", "application/json")
            .end(function (err, res) {
                expect(res.body).to.include({
                    title: "Test",
                    link: "mylink.com",
                })
                done()
            })
    })
})

// describe("GET /api/user/:id", () => {
//     let testId
//     before(done => {
//         api
//             .get("/api/user/name/testPerson")
//             .set("Accept", " application/json")
//             .end((err, res) => {
//                 testId = res.body._id;
//                 done();
//             })
//     })
//     it("Should gets id from username search then return one result based off of id", done => {
//         api
//             .get(`/api/user/${testId}`)
//             .set("Accept", "application/json")
//             .end((err, res) => {
//                 expect(res.body._id).to.equal(testId)
//                 done()
//             })
//     })
// })

// describe("PUT /api/user/:id", () => {
//     let testId;
//     before(done => {
//         api
//             .get("/api/user/name/testPerson")
//             .set("Accept", " application/json")
//             .end((err, res) => {
//                 testId = res.body._id
//                 done()
//             })
//     })
//     before(done => {
//         api
//             .put(`/api/user/${testId}`)
//             .send({
//                 _id: testId,
//                 firstname: "Other",
//                 lastname: "Person",
//                 username: "testPerson",
//                 password: "password"
//             })
//             .set("Accept", "application/json")
//             .end(done)
//     })
//     it("Should change the name and confirm user was updated", done => {
//         api
//             .get(`/api/user/${testId}`)
//             .set("Accept", "application/json")
//             .end((err, res) => {
//                 expect(res.body.firstname).to.equal("Other")
//                 done()
//             })
//     })
// })

// describe("DELETE /api/user/:id", () => {
//     let testId
//     before(done => {
//         api
//             .get("/api/user/name/testPerson")
//             .set("Accept", " application/json")
//             .end((err, res) => {
//                 testId = res.body._id
//                 done()
//             })
//     })
//     before(done => {
//         api
//             .delete(`/api/user/${testId}`)
//             .set("Accept", "application/json")
//             .end(done)
//     })
//     it("should delete the object from the array based on id", done => {
//         api
//             .get("/api/user")
//             .set("Accept", "application/json")
//             .end((err, res) => {
//                 expect(res.body[res.body.length - 1]._id).to.not.include(testId)
//                 done()
//             })
//     })
// })