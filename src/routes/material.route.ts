import { Router } from "express"
import { saveMaterial, findMaterialByName } from '../service/material.service';

const materialRoutes = Router();

materialRoutes.post('/new', (req, res) => {
    saveMaterial({name: req.body.name, type: req.body.type}).then(() => {
      res.send("saved successfully!");
    }).catch(err => {
      res.send(err.getMessage());
    });
  });

  materialRoutes.get('/:name', (req, res) => {
    let materialName = req.params.name;
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

export { materialRoutes };