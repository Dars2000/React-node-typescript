import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ItemList: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [formData, setFormData] = useState<{ name: string; description: string }>({ name: '', description: '' });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10); // Puedes ajustar este número

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/items', {
          params: {
            page: currentPage,
            limit: itemsPerPage,
            search: searchTerm // Añadido parámetro de búsqueda aquí
          }
        });
        setItems(response.data.items);
        setTotalPages(response.data.pages);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [currentPage, itemsPerPage, searchTerm]);

  const handleDeleteItem = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5001/api/items/${id}`);
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEditClick = (item: any) => {
    setEditItemId(item._id);
    setFormData({ name: item.name, description: item.description });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:5001/api/items/${editItemId}`, formData);
      setItems(items.map(item => item._id === editItemId ? { ...item, ...formData } : item));
      setEditItemId(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditItemId(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Resetear la página actual a 1 cuando se cambie el término de búsqueda
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Filter items based on search term
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center flex-1">Lista de entidades</h1>
        <Link
          to="/add-item"
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm transition-transform duration-200 hover:scale-105"
        >
          Agregar
        </Link>
      </div>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-md p-2 w-full transition-transform duration-200 hover:scale-105"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredItems.map((item) => (
          <div key={item._id} className="border border-gray-300 rounded-lg p-4 shadow-sm">
            {editItemId === item._id ? (
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-2 mb-2 w-full transition-transform duration-200 hover:scale-105"
                />
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-2 mb-2 w-full transition-transform duration-200 hover:scale-105"
                />
                <div>
                  <button
                    onClick={handleSaveChanges}
                    className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm mr-2 transition-transform duration-200 hover:scale-105"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm transition-transform duration-200 hover:scale-105"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div>
                  <button
                    onClick={() => handleEditClick(item)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm mr-2 transition-transform duration-200 hover:scale-105"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteItem(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm transition-transform duration-200 hover:scale-105"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm mr-2 transition-transform duration-200 hover:scale-105"
        >
          Atras
        </button>
        <span className="mx-2">
          Pagina {currentPage}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm transition-transform duration-200 hover:scale-105"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ItemList;
