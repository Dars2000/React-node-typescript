import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddItem: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate(); // Usar useNavigate en lugar de useHistory

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/items', { name, description });
      navigate('/'); // Redirigir a la página de inicio después de añadir el ítem
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Registro De Entidad</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          required
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate('/')} // Navegar a la página de inicio al hacer clic en "Back"
            className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm"
          >
            Atras
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm"
          >
            Agregar Entidad
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
