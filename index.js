const express = require("express");
const app = express();

//function
// function isOldEnough(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "You are not old enough to ride",
    });
  }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1", function (req, res) {
  res.json({
    msg: "You are old enough to ride",
  });
});

app.get("/ride2", function (req, res) {
  res.json({
    msg: "You have successfully rided",
  });
});

app.listen(3000);
