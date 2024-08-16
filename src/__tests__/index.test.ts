import request from "supertest";
import { app } from "../index"; 

describe("GET /api/hotels", () => {
  it("should return a list of hotels", async () => {
    const res = await request(app).get("/api/hotels");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
