import mongoose from 'mongoose';
import { IMaterial } from '../interfaces/IMaterial';

const MaterialSchema = new mongoose.Schema({
  name: String,
  type: String
});

let MaterialModel = mongoose.model<IMaterial>('material', MaterialSchema);

export { MaterialModel };
