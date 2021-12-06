import express from 'express';
import mongoose from 'mongoose';
import { saveMaterial, findMaterialByName } from './service/material.service';

const app = express();
// const router = express.Router();
const port = 3000;
// const contextPath = '/api';
const mongoUri: string = "mongodb://localhost:27017/inventory-management-mdb?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

// app.use(contextPath, router)
app.use(express.json());

app.get('/', (req, res) => {
  res.send("server is running.");
});

app.post('/materials/new', (req, res) => {
  saveMaterial({name: req.body.name, type: req.body.type}).then(() => {
    res.send("saved successfully!");
  }).catch(err => {
    res.send(err.getMessage());
  });
});

app.get('/materials/:name', (req, res) => {
  var materialName = req.params.name;
  findMaterialByName(materialName).then(material => {
    if(material) {
      res.send({name: material.name, type: material.type});
    }
  }).catch(err => {
    res.send(err.getMessage());
  });
});

app.listen(port, () => {
  mongoose.connect(mongoUri);
  console.log(`connected to mongodb`);
  console.log(`service is running on port ${port}.`);
});
