const express = require('express');
const cors = require('cors');
const { demoData } = require('./db/data');
const app = express();

app.use(cors());

app.get("/data",async(req, res)=>{
      const data = await demoData.find({});
      res.json({
          data
      })
})

app.listen(3000, console.log("server is running....."))