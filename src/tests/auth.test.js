const request = require("supertest");
const app = require("../app");

describe("Auth Endpoints", () => {
  it("should return 200 OK for a health check endpoint", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
  });
});
