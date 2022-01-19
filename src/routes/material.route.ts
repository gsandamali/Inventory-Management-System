import { Router } from "express"
import { saveMaterial, findMaterialByProduct, getMaterialSummary } from '../service/material.service';
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
    let materialProduct = req.params.product;
    console.log(materialProduct);
    findMaterialByProduct(materialProduct).then(material => {
      if(material) {
        res.send(mapToResponseBody("SUCCESS", "Data found", material));
      } else {
        res.send(mapToResponseBody("FAILED", "No data", null));
      }
    }).catch(err => {
      res.send(mapToResponseBody("FAILED", err.getMessage(), null));
    });
  });

 materialRoutes.get('/product/summary', (req, res) => {
    getMaterialSummary ().then(summary => {
      if(summary) {
        res.send(mapToResponseBody("SUCCESS", "Product Summary", summary));
      } else {
        res.send(mapToResponseBody("FAILED", "cannot Disply Summary", null));
      }
    }).catch(err => {
      res.send(mapToResponseBody("FAILED", err.getMessage(), null));
    });
  });

export { materialRoutes };