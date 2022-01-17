import { Router } from "express"
import { saveMaterial, findMaterialByName } from '../service/material.service';
import { mapToMaterial } from '../utils/material.mapper';
import { mapToResponseBody } from '../utils/responseBody.mapper';

const materialRoutes = Router();

materialRoutes.post('/new', (req, res) => {
    saveMaterial(mapToMaterial(req)).then(() => {
      res.send(mapToResponseBody("SUCCESS", "data saved", null));
    }).catch(err => {
      res.send(mapToResponseBody("FAILED", err.getMessage(), null));
    });
  });

  materialRoutes.get('/:product', (req, res) => {
    let materialName = req.params.product;
    console.log(materialName);
    findMaterialByName(materialName).then(material => {
      if(material) {
        res.send(mapToResponseBody("SUCCESS", "Data found", material));
      } else {
        res.send(mapToResponseBody("FAILED", "No data", null));
      }
    }).catch(err => {
      res.send(mapToResponseBody("FAILED", err.getMessage(), null));
    });
  });

export { materialRoutes };