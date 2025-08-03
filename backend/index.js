const express = require('express');
const cors = require('cors');
const { demoData } = require('./db/data');
require('dotenv').config()
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get("/data",async(req, res)=>{
      const data = await demoData.find({});
      res.json({
          data
      })
})

app.listen(port, console.log("server is running....."))