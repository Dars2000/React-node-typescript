import axios from 'axios';
import Item from './models';

// Función para consumir la API externa y almacenar datos en la base de datos
export const fetchAndStoreItems = async () => {
  try {
    // Reemplaza la URL con la URL de la API externa real
    const response = await axios.get('https://api.example.com/items');
    const items = response.data;

    console.log('Fetched items:', items); // Agrega este log para ver los datos obtenidos

    // Almacena cada ítem en la base de datos
    for (const itemData of items) {
      console.log('Storing item:', itemData); // Agrega este log para ver los datos antes de guardarlos
      const newItem = new Item({
        name: itemData.name,
        description: itemData.description,
      });
      await newItem.save();
    }
    
    console.log('Items successfully stored');
  } catch (error) {
    console.error('Error fetching and storing items:', error);
  }
};
