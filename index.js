require("dotenv").config();
const express = require("express");
const app = express();

var multipart = require("connect-multiparty");

const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

//REQ.BODY + BODY.PARSER => to get serverside console.log!! ALWAYS
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Use body parser. To be able parse post request information
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //crucial for post requests from client
app.use(multipart());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const usersRoutes = require('./routes/users.routes')
app.use('/api', usersRoutes)


const imagesRoutes = require('./routes/images.routes')
app.use('/api', imagesRoutes)


const photosRoutes = require('./routes/photos.routes');
const req = require("express/lib/request");
app.use('/api', photosRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}, dirname ${__dirname}`)
);
