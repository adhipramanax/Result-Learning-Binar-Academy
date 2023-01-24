const { NotFoundError } = require("../errors");

class ApplicationController {
  handleGetRoot = (req, res) => {
    res.status(200).json({
      status: "OK",
      message: "BCR API is up and running!",
    });
  };

  handleNotFound = (req, res) => {
    const err = new NotFoundError(req.method, req.url);

    res.status(404).json({
      error: {
        name: err.name,
        message: err.message,
        details: err.details,
      },
    });
  };

  handleError = (err, req, res) => {
    res.status(500).json({
      error: {
        name: err.name,
        message: err.message,
        details: err.details || null,
      },
    });
  };

  getOffsetFromRequest(req) {
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (page - 1) * pageSize;
    return offset;
  }

  buildPaginationObject(req, count) {
    const { page = 1, pageSize = 10 } = req.query;
    const pageCount = Math.ceil(count / pageSize);
    return {
      page,
      pageCount,
      pageSize,
      count,
    };
  }
}

module.exports = ApplicationController;

// make test fot ApplicationController.js
// Language: javascript
// Path: __test__\controllers\ApplicationController.test.js
// Compare this snippet from __test__\controllers\ApplicationController.test.js:
// /* eslint-disable no-undef */
// const { describe, it, expect } = require("@jest/globals");
//
// describe("ApplicationController", () => {
//   const ApplicationController = require("../../app/controllers/ApplicationController");
