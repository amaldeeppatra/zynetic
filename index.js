const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(process.env.mongodbUrl).then((e) => console.log("Mongodb connected"));

const { swaggerUi, swaggerDocument } = require('./config/swagger');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', require('./routes/api/index'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => console.log(`Server running at ${PORT}`));