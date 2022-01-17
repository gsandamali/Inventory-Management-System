import mongoose from 'mongoose';
import { IMaterial } from '../interfaces/IMaterial';

const MaterialSchema = new mongoose.Schema({
  productName: String,
  amount: Number,
  unit: String,
  direction: String
});

let MaterialModel = mongoose.model<IMaterial>('material', MaterialSchema);

export { MaterialModel };
