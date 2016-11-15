var app = require("../api/api-server") //Require our app

app.set("port", process.env.PORT || 8000)
app.set("host", process.env.IP || "localhost")

var server = app.listen(app.get('port'), app.get("host"), function() {
    console.log("Server runing on port " + server.address().port)
})