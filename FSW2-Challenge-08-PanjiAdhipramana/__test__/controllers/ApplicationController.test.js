/* eslint-disable no-undef */
const { describe, it, expect } = require("@jest/globals");

describe("ApplicationController", () => {
  const ApplicationController = require("../../app/controllers/ApplicationController");
  const instance = new ApplicationController();

  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  const mockRequest = (sessionData) => {
    return {
      query: {},
      session: { data: sessionData },
    };
  };

  it("to define", () => {
    expect(ApplicationController).toBeDefined();
  });

  it("handleGetRoot must define", () => {
    expect(instance.handleGetRoot).toBeDefined();
  });

  it("handleError must define", () => {
    expect(instance.handleError).toBeDefined();
  });

  it("handleNotFound must define", () => {
    expect(instance.handleNotFound).toBeDefined();
  });

  it("handleNotFound request", () => {
    const req = mockRequest();
    const res = mockResponse();
    instance.handleNotFound(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it("handleError request", () => {
    const error = new Error("error");
    const req = mockRequest();
    const res = mockResponse();
    instance.handleError(error, req, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });

  it("handleGetRoot request", () => {
    const req = mockRequest();
    const res = mockResponse();
    instance.handleGetRoot(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("getOffsetFromRequest request", () => {
    const req = mockRequest();
    const result = instance.getOffsetFromRequest(req);
    expect(result).toEqual(0);
  });
});
