import mongoose from 'mongoose';
import { IMaterial } from '../interfaces/IMaterial';

const MaterialSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
  unit: String,
  direction: String,
  updated: { type: Date, default: Date.now() },
});

let MaterialModel = mongoose.model<IMaterial>('material', MaterialSchema);

export { MaterialModel };
