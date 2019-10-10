// Import contact model
Information = require('./informationModel');

// Handle index actions
exports.index = function (req, res) {
  Information.get(function (err, informations) {
      if (err) {
          res.json({
              status: "error",
              message: err,
          });
      }
      res.json({
          status: "success",
          message: "Contacts retrieved successfully",
          data: informations
      });
  });
};

// Handle create information actions
exports.new = function (req, res) {
  var information = new Information();
  console.log(req.body)
  information.package = req.body.package;
// save the contact and check for errors
  information.save(function (err) {
      // if (err)
      //     res.json(err);
      res.json({
          message: 'New information created!',
          data: information
      });
  });
};

// Handle view information
exports.view = function (req, res) {
  Information.findById(req.params.contact_id, function (err, information) {
      if (err)
          res.send(err);
      res.json({
          message: 'Information details loading..',
          data: information
      });
  });
};

// Handle update information
exports.update = function (req, res) {
  Information.findById(req.params.information_id, function (err, information) {
          if (err)
              res.send(err);
          information.package = req.body.package;
  // save the contact and check for errors
        information.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Information Info updated',
                data: information
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Information.remove({
        _id: req.params.information_id
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Information deleted'
        });
    });
};
