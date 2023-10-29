const express = require("express")
const app = express()
const mediumClients = require("./medium-clients")
const premiumClients = require("./premium-clients")

app.get("/", function (req, res) {
  res.send("Bienvenido a la api de ADA Cars");
});

app.use("/medium-clients", mediumClients);
app.use("/premium-clients", premiumClients);

app.listen(3000, () => {
  // console.log("server listening on port", 3000);
})

module.exports = app;
