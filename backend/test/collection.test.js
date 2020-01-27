const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:4000");

// Describe("POST /", () => {
//     Before(done => {
//         api
//             .post("/api/collection/")
//     })
// })