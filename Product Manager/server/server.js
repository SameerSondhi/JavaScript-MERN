const express = require('express');

const app = express();

const port = 8000

const cors = require('cors')
app.use(cors())

app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new

require('./config/mongoose.config'); // This is new

const Routes = require('./routes/product.routes')
Routes(app);
app.listen(port, () => console.log("Listening at Port 8000"))

