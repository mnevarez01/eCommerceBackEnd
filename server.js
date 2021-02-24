const express = require('express');
const sequelize = require('./config/connection');

//importing routes for page functionality
// const apiRoutes = require('./routes')


const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(apiRoutes)

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`)
  })
})