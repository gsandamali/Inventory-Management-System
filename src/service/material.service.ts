import { MaterialModel } from '../models/material.model';
import { IMaterial} from '../interfaces/IMaterial';

async function saveMaterial(material: IMaterial) {
    var materialToSave = new MaterialModel(material);
    materialToSave.save();
}

async function findMaterialByProduct(materialProduct: string) {
    var material = await MaterialModel.findOne({product: materialProduct});
    console.log(material);
    return material;
}

async function getMaterialSummary() {
    
    const pipeline = [
        { $match: {} },
        { $group: {_id: "$product", sumQuantity: { $sum: "$quantity" }}}
    ];
    
    var summary = await MaterialModel.aggregate(pipeline);
    console.log(summary);
    return summary;
}

export { saveMaterial, findMaterialByProduct, getMaterialSummary};