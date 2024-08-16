import { Request, Response } from 'express';
import Item from '../models/Item';

// Obtener todos los ítems

export const getItems = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;

    // Filtrado por término de búsqueda
    const query = search ? {
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ]
    } : {};

    const total = await Item.countDocuments(query); // Total de documentos filtrados
    const items = await Item.find(query)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));
    
    res.json({
      items,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit))
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
};
  

// Obtener un ítem por ID
export const getItem = async (req: Request, res: Response) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching item' });
  }
};

// Crear un nuevo ítem
export const createItem = async (req: Request, res: Response) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json({ item: newItem });
  } catch (error) {
    res.status(500).json({ error: 'Error creating item' });
  }
};

// Actualizar un ítem
export const updateItem = async (req: Request, res: Response) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json({ error: 'Error updating item' });
  }
};

// Eliminar un ítem
export const deleteItem = async (req: Request, res: Response) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting item' });
  }
};
