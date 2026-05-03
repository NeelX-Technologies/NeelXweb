import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
  website: { type: String },
  
  serviceType: { type: String, required: true },
  projectBudget: { type: String, required: true },
  timeline: { type: String, required: true },
  projectDescription: { type: String, required: true },
  
  additionalServices: [{ type: String }],
  
  hearAboutUs: { type: String },
  preferredContact: { type: String, default: 'email' },
}, { timestamps: true });

export default mongoose.model('Order', OrderSchema);
