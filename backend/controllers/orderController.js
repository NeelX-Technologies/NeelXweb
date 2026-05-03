import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  try {
    console.log('Incoming order data:', req.body);
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    console.log('Order successfully saved:', savedOrder._id);
    res.status(201).json({ message: 'Order submitted successfully', order: savedOrder });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Failed to submit order', error: error.message });
  }
};
