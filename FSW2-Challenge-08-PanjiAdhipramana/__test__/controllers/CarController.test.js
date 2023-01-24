const { describe, it, expect } = require("@jest/globals");
const request = require("supertest");
const app = require("../../app");

// get
describe("GET /v1/cars/:id", () => {
  it("should response with 200 as status code", async () => {
    const id = 1;

    return await request(app)
      .get("/v1/cars/" + id)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(response.body);
      });
  });
});

// delete
describe("DELETE /v1/cars/:id", () => {
  let car, accessTokenAdmin, accessTokenCustomer;

  beforeEach(async () => {
    accessTokenAdmin = await request(app).post("/v1/auth/login").send({
      email: "ranggawarsita@binar.co.id",
      password: "123456",
    });

    accessTokenCustomer = await request(app).post("/v1/auth/login").send({
      email: "Jayabaya@binar.co.id",
      password: "123456",
    });

    car = await request(app)
      .post("/v1/cars")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${accessTokenAdmin.body.accessToken}`)
      .send({
        name: "Ferrari Delete",
        price: 1000000,
        size: "MEDIUM",
        image: "https://source.unsplash.com/500x500",
      });

    return { car, accessTokenAdmin, accessTokenCustomer };
  });

  it("should response with 204 as status code", async () => {
    return request(app)
      .delete("/v1/cars/" + car.body.id)
      .set("Authorization", `Bearer ${accessTokenAdmin.body.accessToken}`)
      .then((res) => {
        expect(res.status).toBe(204);
      });
  });

  it("should response with 401 as status code", async () => {
    return request(app)
      .delete("/v1/cars/" + car.body.id)
      .set("Authorization", `Bearer ${accessTokenCustomer.body.accessToken}`)
      .then((res) => {
        expect(res.status).toBe(401);
        if (res.body.details === null) {
          expect(res.body).toEqual({
            error: expect.objectContaining({
              name: expect.any(String),
              message: expect.any(String),
              details: null,
            }),
          });
          return;
        }
        expect(res.body).toEqual({
          error: expect.objectContaining({
            name: expect.any(String),
            message: expect.any(String),
            details: expect.objectContaining({
              role: expect.any(String),
              reason: expect.any(String),
            }),
          }),
        });
      });
  });

  afterEach(async () => {
    return request(app)
      .delete("/v1/cars/" + car.body.id)
      .set("Authorization", `Bearer ${accessTokenAdmin.body.accessToken}`);
  });
});

// rent car
const dayjs = require("dayjs");
dayjs().format();

describe("POST /v1/cars/:id/rent", () => {
  let car, accessTokenAdmin, accessTokenCustomer;
  let rentStartedAt = dayjs().add(1, "day");
  let rentEndedAt = dayjs(rentStartedAt).add(1, "day");

  rentStartedAt = rentStartedAt.$d;
  rentEndedAt = rentEndedAt.$d;

  beforeAll(async () => {
    accessTokenAdmin = await request(app).post("/v1/auth/login").send({
      email: "ranggawarsita@binar.co.id",
      password: "123456",
    });

    accessTokenCustomer = await request(app).post("/v1/auth/login").send({
      email: "Jayabaya@binar.co.id",
      password: "123456",
    });

    car = await request(app)
      .post("/v1/cars")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${accessTokenAdmin.body.accessToken}`)
      .send({
        name: "Ferrari Rental",
        price: 1000000,
        size: "MEDIUM",
        image: "https://source.unsplash.com/500x500",
      });

    return car;
  });

  it("should response with 201 as status code", async () => {
    return await request(app)
      .post("/v1/cars/" + car.body.id + "/rent")
      .set("Authorization", `Bearer ${accessTokenCustomer.body.accessToken}`)
      .set("Content-Type", "application/json")
      .send({ rentStartedAt, rentEndedAt })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(res.body);
      });
  });

  it("should response with 401 as status code", async () => {
    return await request(app)
      .post("/v1/cars/" + car.body.id + "/rent")
      .set("Authorization", `Bearer ${accessTokenAdmin.body.accessToken}`)
      .set("Content-Type", "application/json")
      .send({ rentStartedAt, rentEndedAt })
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: expect.objectContaining({
              name: expect.any(String),
              message: expect.any(String),
              details: expect.objectContaining({
                role: expect.any(String),
                reason: expect.any(String),
              }),
            }),
          })
        );
      });
  });

  it("should response with 422 as status code", async () => {
    return await request(app)
      .post("/v1/cars/" + car.body.id + "/rent")
      .set("Authorization", `Bearer ${accessTokenCustomer.body.accessToken}`)
      .set("Content-Type", "application/json")
      .send({ rentStartedAt, rentEndedAt })
      .then((res) => {
        expect(res.statusCode).toBe(422);
        expect(res.body).toEqual(res.body);
      });
  });
});

// update
describe("PUT /v1/cars/:id", () => {
  let car, accessTokenAdmin, accessTokenCustomer;

  const name = "Ferrari Update";
  const price = 100000;
  const size = "SMALL";
  const image = "https://source.unsplash.com/500x500";

  beforeEach(async () => {
    accessTokenAdmin = await request(app).post("/v1/auth/login").send({
      email: "ranggawarsita@binar.co.id",
      password: "123456",
    });
    accessTokenCustomer = await request(app).post("/v1/auth/login").send({
      email: "jayabaya@binar.co.id",
      password: "123456",
    });

    car = await request(app)
      .post("/v1/cars")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${accessTokenAdmin.body.accessToken}`)
      .send({
        name,
        price,
        size,
        image,
      });

    return { car, accessTokenAdmin, accessTokenCustomer };
  });

  it("should response with 200 as status code", async () => {
    return request(app)
      .put("/v1/cars/" + car.body.id)
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${accessTokenAdmin._body.accessToken}`)
      .send({ name, price, size, image })
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual({});
      });
  });

  it("should response with 401 as status code", async () => {
    return request(app)
      .put("/v1/cars/" + car.body.id)
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${accessTokenCustomer._body.accessToken}`)
      .send({ name, price, size, image })
      .then((res) => {
        expect(res.status).toBe(401);
        if (res.body.details === null) {
          expect(res.body).toEqual({
            error: expect.objectContaining({
              name: expect.any(String),
              message: expect.any(String),
              details: null,
            }),
          });
          return;
        }
        expect(res.body).toEqual({
          error: expect.objectContaining({
            name: expect.any(String),
            message: expect.any(String),
            details: expect.objectContaining({
              role: expect.any(String),
              reason: expect.any(String),
            }),
          }),
        });
      });
  });

  afterEach(async () => {
    return request(app)
      .delete("/v1/cars/" + car.body.id)
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${accessTokenAdmin.body.accessToken}`);
  });
});

// list car
describe("GET /v1/cars/", () => {
  it("should response with 200 as status code", async () => {
    return request(app)
      .get("/v1/cars")
      .set("Content-Type", "application/json")
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});
