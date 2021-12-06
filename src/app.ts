import express from 'express';
import mongoose from 'mongoose';
import { saveMaterial, findMaterialByName } from './service/material.service';

const app = express();
// const router = express.Router();
const port = 3000;
// const contextPath = '/api';
const mongoUri: string = "local url";

// app.use(contextPath, router)
app.use(express.json());
app.use(express.static('api'));

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
  console.log(materialName);
  findMaterialByName(materialName).then(material => {
    if(material) {
      res.send({status: "success", message: "material found", payload: {name: material.name, type: material.type}});
    } else {
      res.send({status: "failed", message: "no such data", payload: null});
    }
  }).catch(err => {
    res.send({status: "failed", message: "error occured", payload: err.getMessage()});
  });
});

app.listen(port, () => {
  mongoose.connect(mongoUri);
  console.log(`connected to mongodb`);
  console.log(`service is running on port ${port}.`);
});
