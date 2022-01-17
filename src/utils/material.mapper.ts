import { Request } from 'express'
import { IMaterial } from '../interfaces/IMaterial';

function mapToMaterial(req: Request) {
    const material = {} as IMaterial;
    material.productName = req.body.name;
    material.amount = req.body.amount;
    material.unit = req.body.unit;
    material.direction = req.body.direction;

    return material;
}

export { mapToMaterial };