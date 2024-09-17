import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ categoria }) => {
  const { food_list } = useContext(StoreContext);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchName, setSearchName] = useState("");  

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchVisible(false);
    }
  };

  return (
    <div className='food-display' id='food-display'>
      <div className='search-food'>
        <h2>Os melhores pratos para você</h2>
        <div className="search-container">
          <i className='bx bx-search-alt-2' id='search-icon' onClick={() => setSearchVisible(!searchVisible)}></i>
          <div className={`search-menu ${searchVisible ? 'visible' : ''}`}>
            <input
              type="text"
              placeholder='Digite o item para procurá-lo'
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <i class='bx bx-x' onClick={()=> setSearchName("")}></i>
          </div>
        </div>
      </div>
      <div className='food-display-list'>
        {food_list
          .filter(item =>
            (categoria === "All" || categoria === item.categoria) &&
            item.name.toLowerCase().includes(searchName.toLowerCase())
          )
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        }
      </div>
    </div>
  );
}

export default FoodDisplay;
