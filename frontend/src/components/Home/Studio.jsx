import React, { useState } from 'react';
import { categories } from '../../constants';

const Studio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredImage, setFilteredImage] = useState(null);
  const [filter,setFiter] = useState({gender: '',occasion: '',size: '',budget: ''})
  const [gender, setGender] = useState('');
  const [occasion, setOccasion] = useState('');
  const [age, setAge] = useState('');
  const [time, setTime] = useState('');

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Function to apply filters
  const applyFilters = () => {
    // Implement filter logic here
    // For now, just set the selected image as the filtered image
    console.log("Filtered image:", filter);
    setFilteredImage(selectedImage);
  };

  // Function to handle Style AI submission
  const handleStyleAISubmit = () => {
    // Implement submission logic here
    console.log("Filtered image:", filter);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Style Studio</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />
      <div className="mb-4">
        <label htmlFor="gender" className="block font-bold mb-1">Gender:</label>
        <select
          id="gender"
          value={filter.gender}
          onChange={(e) => setFiter({...filter, gender:e.target.value})}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="occasion" className="block font-bold mb-1">Occasion:</label>
        <select
          id="occasion"
          value={filter.occasion}
          onChange={(e) => setFiter({...filter, occasion:e.target.value})}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Select Occasion</option>
          {categories.map((item)=>(
            <option value={`${item.title}`}>{item.title}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="size" className="block font-bold mb-1">Size:</label>
        <select
          id="size"
          value={filter.size}
          onChange={(e) => setFiter({...filter, size:e.target.value})}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Select Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="budget" className="block font-bold mb-1">Price Range:</label>
        <select
          id="budget"
          value={filter.budget}
          onChange={(e) => setFiter({...filter, budget:e.target.value})}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Select Price Range</option>
          <option value="0 - 500">0 - 500</option>
          <option value="500-1000">500-1000</option>
          <option value="1000-2000">1000-2000</option>
          <option value="2000+">2000+</option>
        </select>
      </div>
      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white px-4 py-2 mb-2 rounded"
      >
        Apply Filters
      </button>
      {filteredImage && (
        <div>
          <h3 className="text-xl font-bold mb-2">Filtered Image</h3>
          <img src={filteredImage} alt="Filtered" className="w-full mb-2" />
          <button
            onClick={handleStyleAISubmit}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Style AI
          </button>
        </div>
      )}
    </div>
  );
};

export default Studio;
