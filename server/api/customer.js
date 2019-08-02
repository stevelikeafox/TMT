module.exports = function(app) {
  let apiVersion = "/api/v0.0";
  const customers = require("../schema/customers");

  app.post(`${apiVersion}/customers`, (req, res, next) => {
    const postBody = req.body;
    const newCustomers = new customers(postBody);

    newCustomers.save((err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json(result);
    });
  });

  app.get(`${apiVersion}/customers`, (req, res, next) => {
    customers.find({}).exec((err, result) => {
      if (err) return res.status(500).send(err);
      res.status(200).json(result);
      var data = result;
      return data;
    });
  });
};
