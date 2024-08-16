import { Request, Response } from 'express';
import Item from './models'; // Asegúrate de que la ruta es correcta

export const getItems = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const items = await Item.find().skip((page - 1) * limit).limit(limit);
    const totalItems = await Item.countDocuments();
    res.json({
      items,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
};
export const getItem = async (req: Request, res: Response) => {
    try {
      const itemId = req.params.id;
      const item = await Item.findById(itemId);
  
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.json(item);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  export const createItem = async (req: Request, res: Response) => {
    try {
      const newItem = new Item(req.body);
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error) {
      res.status(400).json({ message: 'Error creating item', error });
    }
  };
  export const updateItem = async (req: Request, res: Response) => {
    try {
      const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.json(updatedItem);
    } catch (error) {
      res.status(400).json({ message: 'Error updating item', error });
    }
  };
  export const deleteItem = async (req: Request, res: Response) => {
    try {
      const deletedItem = await Item.findByIdAndDelete(req.params.id);
      if (!deletedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting item', error });
    }
  };
        