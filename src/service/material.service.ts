import { MaterialModel } from '../models/material.model';
import { IMaterial} from '../interfaces/IMaterial';

async function saveMaterial(material: IMaterial) {
    var materialToSave = new MaterialModel(material);
    materialToSave.save();
}

async function findMaterialByName(materialName: string) {
    var material = await MaterialModel.findOne({Product: materialName});
    console.log(material);
    return material;
}

export { saveMaterial, findMaterialByName };