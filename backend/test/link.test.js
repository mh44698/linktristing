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
            .end(done)
    })
    before(done => {
        api
            .get("/api/user/name/collectionPerson")
            .set("Accept", "application/json")
            .then(res => {
                setUId(res.body._id)
                done()
            })
    })
    before(done => {
        let testUId = getUId()
        api
            .post(`/api/collection/${testUId}`)
            .set("Accept", " application/json")
            .send({
                title: "Test collection",
                description: "list of links"
            })
            .end(done)
    })
    before(done => {
        api
            .get("/api/user/name/collectionPerson")
            .set("Accept", "application/json")
            .then(res => {
                setColId(res.body.collections[0])
                done()
            })

    })

    before(done => {
        let testColId = getColId()
        api
            .post(`/api/link/${testColId}`)
            .set("Accept", "application/json")
            .send({
                title: "Test",
                link: "mylink.com"
            })
            .end(done)
    })
    before(done => {
        let testColId = getColId()
        api
            .get(`/api/collection/${testColId}`)
            .set("Accept", "application/json")
            .then(res => {
                setLinkId(res.body.linklist[0])
                done()
            })
    })

    it("Should add new user and collection and link then get link by id", function (done) {
        let link = getLinkId()
        api
            .get(`/api/link/${link}`)
            .set("Accept", "application/json")
            .end(function (err, res) {
                expect(res.body).to.include({
                    title: "Test",
                    link: "mylink.com"
                })
                done()
            })
    })
})

describe("PUT /api/link/:id", () => {

    before(done => {
        let testLinkId = getLinkId()
        api
            .put(`/api/link/${testLinkId}`)
            .send({
                link: "changedlink.com"
            })
            .set("Accept", "application/json")
            .end(done)
    })
    it("Should change the link then get link by id and confirm link was updated", done => {
        let testLinkId = getLinkId()
        api
            .get(`/api/link/${testLinkId}`)
            .set("Accept", "application/json")
            .end((err, res) => {
                expect(res.body.link).to.equal("changedlink.com")
                done()
            })
    })
})

describe("PUT /api/collection/:id", () => {

    before(done => {
        let testColId = getColId()
        api
            .put(`/api/collection/${testColId}`)
            .send({
                description: "changed"
            })
            .set("Accept", "application/json")
            .end(done)
    })
    it("Should change the collection then get collection by id and confirm collection was updated", done => {
        let testColId = getColId()
        api
            .get(`/api/collection/${testColId}`)
            .set("Accept", "application/json")
            .end((err, res) => {
                expect(res.body.description).to.equal("changed")
                done()
            })
    })
})

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