const { describe, it, expect } = require("@jest/globals");
const dotenv = require("dotenv");
const request = require("supertest");
const app = require("../../app");
const email = `member${Math.random().toString().substring(12)}@gmail.com`;

dotenv.config();

// register
describe("POST /v1/auth/register", () => {
  it("should response with 201 as status code", async () => {
    const name = "Hello";
    const password = "123";

    return request(app)
      .post("/v1/auth/register")
      .set("Content-Type", "application/json")
      .send({ name, email, password })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  });

  it("should response with 422 as status code", async () => {
    const name = "Member";
    const password = "123";

    return request(app)
      .post("/v1/auth/register")
      .set("Content-Type", "application/json")
      .send({ name, email, password })
      .then((res) => {
        expect(res.statusCode).toBe(422);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: {
              name: expect.any(String),
              message: expect.any(String),
              details: {
                email: expect.any(String),
              },
            },
          })
        );
      });
  });
});

// login
describe("POST /v1/auth/login", () => {
  const email = "Jayabaya@binar.co.id";
  const password = "123456";
  const wrongEmail = "invalid@gmail.com";
  const wrongPassword = "invalid";

  it("should response with 201 as status code", async () => {
    return request(app)
      .post("/v1/auth/login")
      .send({
        email,
        password,
      })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({
          accessToken: expect.any(String),
        });
      });
  });

  it("should response with 404 as status code", async () => {
    return request(app)
      .post("/v1/auth/login")
      .send({
        email: wrongEmail,
        password,
      })
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({
          error: {
            name: expect.any(String),
            message: expect.any(String),
            details: {
              email: expect.any(String),
            },
          },
        });
      });
  });

  it("should response with 401 as status code", async () => {
    return request(app)
      .post("/v1/auth/login")
      .send({
        email,
        password: wrongPassword,
      })
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual({
          error: {
            name: expect.any(String),
            message: expect.any(String),
            details: expect.any(Object),
          },
        });
      });
  });
});

// who am i
describe("GET /v1/auth/whoami", () => {
  it("should response with 200 as status code", async () => {
    const accessToken = await request(app).post("/v1/auth/login").send({
      email: "Jayabaya@binar.co.id",
      password: "123456",
    });

    return request(app)
      .get("/v1/auth/whoami")
      .set("Authorization", `Bearer ${accessToken.body.accessToken}`)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
          id: expect.any(Number),
          name: expect.any(String),
          email: expect.any(String),
          image: null,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        });
      });
  });

  it("should response with 401 as status code", async () => {
    return request(app)
      .get("/v1/auth/whoami")
      .set("Authorization", `Bearer ${"invalidtoken"}`)
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual({
          error: {
            name: expect.any(String),
            message: expect.any(String),
            details: null,
          },
        });
      });
  });
});
