const request = require("supertest");
const server = require("./server");
const db = require ("../data/dbConfig.js");
const testUser = { 
    name: "name",
    username : "username", 
    password: "password",
    email: "email",
    phonenumber: "123456789"
}

describe("server.js", () => {
    describe("GET request for plants", () => {
        it("should return status code 400 when not logged in", async () => {
            const res = await request(server).get("/api/plants");
            expect(res.status).toBe(400);
        });
        it("should return JSON", async() => {
            const res = await request(server).get("/api/plants");
            expect(res.type).toBe("application/json");
        });
    });
    describe("registering new user", () => {
        it("should return with status code 201 when adding new users", async () => {
            await db("users").truncate();
            const res = await request(server)
                .post("/api/auth/register")
                .send(testUser);
            expect(res.status).toBe(201);
        });
        it("should return status code 500 with invalid user", async() => {
            const res = await request(server)
                .post("/api/auth/register")
                .send({ user: "test", pass: "test" });
            expect.res(status).toBe(500);
        });
    });
    describe("login with user", () => {
        it("should return status code 200 with test user", async() => {
            const res = await request(server)
                .post("/api/auth/login")
                .send(testUser);
                expect(res.status).toBe(200);
        });
        it("should return with status code of 401 with invalid user", async() => {
            const res = await request(server)
                .post("/api/auth/login")
                .send({ username: "invalid", password: "invalid" })
        });
    });
});