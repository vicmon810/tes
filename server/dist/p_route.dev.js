"use strict";

var express = require("express");

var pool = require("./database"); // Ensure this path is correct


var router = express.Router(); // Handler to get a single property's information

router.get("/property/:searchInput", function _callee(req, res) {
  var searchInput, searchQuery, _checkResult, _searchQuery;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          searchInput = req.params.searchInput;
          request = new pool.Request();

          if (!(searchInput < 9)) {
            _context.next = 13;
            break;
          }

          console.log("111");
          request.input("property_ID", pool.VarChar, searchInput);
          searchQuery = "SELECT * FROM property_o WHERE property_ID = @property_ID";
          _context.next = 9;
          return regeneratorRuntime.awrap(request.query(searchQuery));

        case 9:
          _checkResult = _context.sent;
          res.json(_checkResult.recordset);
          _context.next = 21;
          break;

        case 13:
          console.log("123");
          request.input("strees", pool.VarChar, searchInput);
          _searchQuery = "SELECT * FROM property_o WHERE strees = @strees";
          _context.next = 18;
          return regeneratorRuntime.awrap(request.query(_searchQuery));

        case 18:
          checkResult = _context.sent;
          console.log(checkResult);
          res.json(checkResult.recordset);

        case 21:
          _context.next = 27;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(500).send("Server error while fetching property");

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 23]]);
}); // Handler to get all properties

router.get("/property", function _callee2(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(pool.query("SELECT * FROM property_o"));

        case 3:
          result = _context2.sent;
          // console.log(result);
          res.json(result.recordset);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).send("Server error while fetching properties");

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Handler to create a new entry in property_temp table

router.post("/property", function _callee3(req, res) {
  var _req$body, property_ID, strees, city, country, date_build, current_owner, price, checkQuery, deleteQuery, insertQuery, _request, _checkResult2;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, property_ID = _req$body.property_ID, strees = _req$body.strees, city = _req$body.city, country = _req$body.country, date_build = _req$body.date_build, current_owner = _req$body.current_owner, price = _req$body.price;
          checkQuery = "SELECT * FROM property_temp WHERE property_ID = @property_ID";
          deleteQuery = "DELETE FROM property_temp WHERE property_ID = @property_ID";
          insertQuery = "INSERT INTO property_temp (property_ID, strees, city, country, date_build, current_owner, price) VALUES (@property_ID, @strees, @city, @country, @date_build, @current_owner, @price)";
          _request = new pool.Request();

          _request.input("property_ID", pool.VarChar, property_ID); // Check if the record exists


          _context3.next = 9;
          return regeneratorRuntime.awrap(_request.query(checkQuery));

        case 9:
          _checkResult2 = _context3.sent;

          if (!(_checkResult2.recordset[0][""] > 0)) {
            _context3.next = 13;
            break;
          }

          _context3.next = 13;
          return regeneratorRuntime.awrap(_request.query(deleteQuery));

        case 13:
          // Insert the new record
          _request.input("strees", pool.VarChar, strees);

          _request.input("city", pool.VarChar, city);

          _request.input("country", pool.VarChar, country);

          _request.input("date_build", pool.Date, date_build);

          _request.input("current_owner", pool.VarChar, current_owner);

          _request.input("price", pool.VarChar, price);

          _context3.next = 21;
          return regeneratorRuntime.awrap(_request.query(insertQuery));

        case 21:
          res.send("Property entry updated successfully");
          _context3.next = 28;
          break;

        case 24:
          _context3.prev = 24;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          res.status(500).send("Server error while updating property entry");

        case 28:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 24]]);
});
router.post("/save", function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          try {
            pool.query("UPDATE property_o\nSET\n    property_o.strees = property_temp.strees,\n    property_o.city = property_temp.city,\n    property_o.country = property_temp.country,\n    property_o.date_build = property_temp.date_build,\n    property_o.current_owner = property_temp.current_owner,\n    property_o.price = property_temp.price\nFROM property_temp\nWHERE property_o.property_ID = property_temp.property_ID;\n");
          } catch (err) {
            console.log("Failed at:", err);
          }

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
});
module.exports = router;