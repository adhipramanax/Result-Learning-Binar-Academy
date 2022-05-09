const model = require("../models");

const Greeting = model.tbl_greeting;

function createGreetings(req, res) {
  const body = req.body;
  // Create a new greeting
  const greeting = new Greeting({
    id_invitation: body.id_invitation,
    message: body.message,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  greeting.save(function (err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(greeting);
    }
  });
  res.status(200).json({
    message: "Success",
  });
}

// get all greetings
function getAllGreetings(req, res) {
  Greeting.find({ id_invitation: req.params.id }, function (err, greetings) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(greetings);
    }
  });
  res.status(200).json({
    message: "Success",
  });
}

/**
 * response Code success 201
 * {
 *  message: 'Greetings created successfully'
 *
 * }
 */
module.exports = {
  createGreetings,
  getAllGreetings,
};
