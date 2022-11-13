const express = require("express");
const app = express();
app.use(express.static("public"));

const ejs = require("ejs");
app.set("view engine", "ejs");

const jsonData = require("./data.json");
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
let time;

const request = require("request");
request(
  "http://worldtimeapi.org/api/timezone/Asia/Kolkata",
  function (error, response, data) {
    if (!error && response.statusCode == 200) {
      console.log(JSON.parse(data));
      console.log(JSON.parse(data).datetime);
      console.log(JSON.parse(data).utc_offset);
      let [hr, min, sec] = [
        JSON.parse(data).datetime.slice(11, 13),
        JSON.parse(data).datetime.slice(14, 16),
        JSON.parse(data).datetime.slice(17, 19),
      ];
      setInterval(() => {
        if (min === 59 && sec === 59) {
          hr = Number(hr) + 1;
          min = 0;
        }
        if (sec !== 59) {
          sec = Number(sec) + 1;
        } else {
          min = Number(min) + 1;
          sec = 0;
        }
        time = hr + ":" + min + ":" + sec;
        console.log(time.slice(0,5));
        
      }, 1000);
    }
  }
);


app.get("/", function (req, res) {
  //? sunrise  https://ipgeolocation.io/documentation/astronomy-api.html
  res.render("home", { time: (time.slice(0,5)), data: jsonData });
});

app.get("/:code", (req, res) => {
  const indData = jsonData.filter(function (data) {
    return data.code == req.params.code;
  });
  console.log(indData);
  // res.send(indData)
  res.render("state", {indData: indData, code: req.params.title });
});

app.listen(3000, function () {
  console.log("Working Bro 3000.");
});
