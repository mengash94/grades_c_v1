const express = require("express");
const app = express();
const path = require("path")
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,'static_files')));
app.use(express.urlencoded({ extended: true }));

let subjects = [

];

app.get("/", (req, res) => {
  res.render("index", { subjects });
});

app.post("/add-subject", (req, res) => {
  let subject = {
    name: req.body.name,
    grade: req.body.grade
  };
  subjects.push(subject);
  res.redirect("/");
});

app.post("/calculator", (req, res) => {
  let total = 0
  console.log("total",total)
  for(let subject of subjects){
    total = total+ parseFloat(subject.grade) ;
    console.log("total",total)
 
  }
  avg = total/subjects.length ;

  res.render("result",{ subjects:subjects,avg:avg })
});

app.post("/new-calculator", (req, res) => {
  subjects = [];
  res.redirect("/");
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

