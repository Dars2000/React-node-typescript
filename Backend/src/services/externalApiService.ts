import axios from 'axios';
import Item from '../models/Item';

// Sincroniza datos desde una API externa a MongoDB
export const syncDataFromApi = async () => {
  try {
    const response = await axios.get('https://api.example.com/data');
    const data = response.data;

    // Guarda datos en MongoDB
    await Item.insertMany(data);
  } catch (error) {
    console.error('Error syncing data:', error);
  }
};
