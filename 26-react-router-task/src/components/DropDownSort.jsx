import { useState } from 'react';
import courses from '../data/courses';
import './DropSort.css';

function DropDownSort({ onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('id');

  const toggleDropDown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSortChange(item);
  };

  const items = Object.keys(courses[0]);
  return (
    <div className="dropdown-container">
      <label className="label">Sort the courses</label>
      <div className={`border ${isOpen ? 'expanded' : ''}`}>
        <button className="dropdown-button" onClick={toggleDropDown}>
          {selectedItem}
        </button>
        {isOpen && (
          <ul className="dropdown-list">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item)}
                className="dropdown-item"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DropDownSort;
