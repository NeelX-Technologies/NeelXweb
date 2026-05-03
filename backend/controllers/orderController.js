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

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete order', error: error.message });
  }
};
