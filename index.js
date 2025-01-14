const express = require("express");
const app = express();
const router = require("./routes/routes");

app.use(express.json())
app.use('/', router);

app.listen(3301, () => {
    console.log("API Rodando");
});