const express = require("express")
const bodyparser = require("body-parser")
const date= require(__dirname+"/date.js")
const app = express()
let items = []
let workitems = []
app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.get("/", function (req, res) {
    let day1=date()
    res.render("list", { ListTitle: day1, newlistitems: items })
})

app.post("/", function (req, res) {
    if (req.body.button == "Work List") {
        workitems.push(req.body.newitem)
        res.redirect('/work')
    }
    else {
        items.push(req.body.newitem)
        res.redirect('/')
    }
})
app.get("/work", function (req, res) {
    res.render("list", { ListTitle: "Work List", newlistitems: workitems })
})
app.listen(3000, function () {
    console.log("Server is Running")
})
