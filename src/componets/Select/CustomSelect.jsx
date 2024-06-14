// src/components/CustomSelect/CustomSelect.js
import React, { useState, useContext } from 'react';
import ProductsContext from '../../context/products/ProductsContext';
import './CustomSelect.css';

const CustomSelect = ({ categories }) => {
  const { handleCategorySelected } = useContext(ProductsContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Todos');

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    handleCategorySelected(value);
    setIsOpen(false);
  };

  return (
    <div className="selectWrapper" onClick={() => setIsOpen(!isOpen)}>
      <div className="selectedOption">
        {selectedOption}
        <span className="icon">&#9660;</span> {/* Símbolo de ángulo hacia abajo */}
      </div>
      {isOpen && (
        <ul className="optionsList">
          {categories.map((category) => (
            <li
              key={category.id}
              className="option"
              onClick={() => handleOptionClick(category.title)}
            >
              {category.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;