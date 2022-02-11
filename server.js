const express = require("express");
const formData = require('express-form-data');
const app = express();
const PORT = 5500;

const profilKontrol = require("./src/controllers/profil-controller");

app.use(express.static("./src/views"));
app.use(express.json());
app.use(express.static("./uploads"));

const options = {
    uploadDir: "./uploads"
}

const products = [];

app.post('/item', formData.parse(options), (req, res, next) => {
    let {title, price, brand} = req.body;
    let thumbnail = req.files.thumbnail.path.replace('\\','/');

    products.push({title, price, brand, thumbnail});

    console.log(products);
    res.send();
    res.redirect('/');
});

app.get('/items', (req,res) => {
    res.json(products);
})

app.use("/users", profilKontrol);

app.get

app.listen(PORT, () => {
    console.log(`server is listening http://localhost:${PORT}`)
});