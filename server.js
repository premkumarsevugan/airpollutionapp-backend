require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Marker = require('./models/marker');
const cors = require('cors');

const app = express();

app.use(cors())

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Hello from API");
})
app.get('/blog',(req,res)=>{
    res.send("Hello from Blog 3");
});

app.post('/marker',async(req,res)=>{
    try{

        const marker = await Marker.create(req.body);
        res.status(200).json(marker);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }

})

app.get('/getmarkers',async(req,res)=>{
    try{

        const marker = await Marker.find({});
        res.status(200).json(marker);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }

})

app.get('/getmarker/:id',async(req,res)=>{
    try{

        const {id} = req.params;

        const marker = await Marker.findById(id);
        res.status(200).json(marker);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }

})

app.get('/update_marker/:sensor_num', async (req, res) => {
    try {
      const { sensor_num } = req.params;
      const updateValues = req.query; // Assuming you pass the updated values as query parameters
  
      const updatedMarker = await Marker.findOneAndUpdate(
        { sensor_num: sensor_num },
        { $set: updateValues },
        { new: true }
      );
  
      if (!updatedMarker) {
        return res.status(404).json({ message: 'Marker not found By Sensor Num' });
      }
  
      res.status(200).json(updatedMarker);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });
  

mongoose.set('strictQuery',false);

mongoose.connect(MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log("App is running on prt 3000");
    })
    console.log("Connected to mongo db");
}).catch((err) => {
    console.log(err);
})