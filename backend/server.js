const express = require("express")
const app = express()
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.json())
app.listen(3001)
app.get("/", (req, res) => {
    res.render("index", {
      paypalClientId:"Ad5QbN_X0Ro0NdgVNDWMePP3sibWs4lDxfA97Hd1ioMkp7ku0LbHqMWOSOR2Yqyy947bHLa_2yjKvYeS",
    })
  })