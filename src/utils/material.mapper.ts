import { Request } from 'express'
import { IMaterial } from '../interfaces/IMaterial';

function mapToMaterial(req: Request) {
    const material = {} as IMaterial;
    material.product = req.body.product;
    material.quantity = req.body.quantity;
    material.unit = req.body.unit;
    material.direction = req.body.direction;

    return material;
}

export { mapToMaterial };