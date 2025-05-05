import React, { useState } from 'react';

const Bundler = () => {
  const [projectDetails, setProjectDetails] = useState({ location: '', type: '' });
  const [products, setProducts] = useState([
    { name: '', category: '', price: '' }
  ]);
  const [bundle, setBundle] = useState([]);

  const handleChange = (index, field, value) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    setProducts(newProducts);
  };

  const addProduct = () => {
    setProducts([...products, { name: '', category: '', price: '' }]);
  };

  const fetchBundle = async () => {
    const response = await fetch('http://localhost:5000/api/bundles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectDetails, products })
    });
    const data = await response.json();
    setBundle(data);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">AI Product Bundler</h2>

      <div className="mb-4">
        <input
          placeholder="Project Location"
          value={projectDetails.location}
          onChange={(e) => setProjectDetails({ ...projectDetails, location: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          placeholder="Project Type"
          value={projectDetails.type}
          onChange={(e) => setProjectDetails({ ...projectDetails, type: e.target.value })}
          className="border p-2"
        />
      </div>

      {products.map((product, index) => (
        <div key={index} className="mb-2">
          <input
            placeholder="Name"
            value={product.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
            className="border p-2 mr-2"
          />
          <input
            placeholder="Category"
            value={product.category}
            onChange={(e) => handleChange(index, 'category', e.target.value)}
            className="border p-2 mr-2"
          />
          <input
            placeholder="Price"
            value={product.price}
            onChange={(e) => handleChange(index, 'price', e.target.value)}
            className="border p-2 w-20"
          />
        </div>
      ))}

      <button onClick={addProduct} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">Add Product</button>
      <button onClick={fetchBundle} className="bg-green-500 text-white px-4 py-2 rounded">Generate Bundle</button>

      <div className="mt-6">
        <h3 className="font-bold mb-2">Suggested Bundle:</h3>
        <ul>
          {bundle.map((item, i) => (
            <li key={i} className="mb-2">
              <strong>{item.name}</strong>: {item.reason} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bundler;
