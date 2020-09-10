const express = require("express");
const PORT = process.env.PORT || 3001;
const router = require("./routes");

const db = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router(app);

const runServer = () => {
    app.listen(PORT, () => {
        console.log(`🌎 ==> API server now on port ${PORT}!`);
    })
}

db.sequelize.sync().then(() => {
    runServer()
})