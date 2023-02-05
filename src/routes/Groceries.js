import React, { useState } from 'react';
import Twemoji from 'react-twemoji';
import { IconContext, MagnifyingGlass, ShoppingCart, } from 'phosphor-react';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';


const Groceries = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, input]);
    setInput('');
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // const groceryEmojis = ["🥚", "🥩", "🥦" ]

  const groceryCategoryData = [
    {id: 1, name: "Egg", emoji: "🥚", color: "#FFF3EB"},
    {id: 2, name: "Meat", emoji: "🥩", color: "#FCDCDB"},
    {id: 3, name: "Spices", emoji: "🌶", color: "#FFCAD1"},
    {id: 4, name: "Fruits", emoji: "🍊", color: "#FFD195"},
    {id: 5, name: "Cheese", emoji: "🧀", color: "#FFF0CD"},
    {id: 6, name: "Broccoli", emoji: "🥦", color: "#D3FFDA"},
    {id: 7, name: "Seafood", emoji: "🐟", color: "#DAEFFF"},
    {id: 8, name: "Milk", emoji: "🥛", color: "#BED0FF"},
    {id: 9, name: "Pastries", emoji: "🍞", color: "#E2C7BB"},
    {id: 10, name: "More", emoji: "🧺", color: "#F9F9F9"},
  ];

  const groceryCategoryList = groceryCategoryData.map((groceryCategory) => 
    <li className="Grocery-category-tile" style={{background: groceryCategory.color}}>
     
      <Twemoji options={{ className: 'twemoji' }}>
        <p>{groceryCategory.emoji}</p>
      </Twemoji>
      <p>{groceryCategory.name}</p>
    </li>
  );

  const groceryListData = [
    {id: 1, name: "Egg", emoji: "🥚", qty: 1, price: "$5.50"},
    {id: 2, name: "Chicken thigh", emoji: "🍗", qty: 1, price: "$12.50"},
    {id: 3, name: "Red chilli", emoji: "🌶", qty: 2, price: "$3.00"},
    {id: 4, name: "Noodles", emoji: "🍜", qty: 4, price: "$4.00"},
  ]

  const groceryList = groceryListData.map((groceryListItem) =>
    <li className='Grocery-cart-item'>
      <p className='qty'>{groceryListItem.qty} x</p>
      <Twemoji options={{ className: 'twemoji' }}>
        <p>{groceryListItem.emoji}</p>
      </Twemoji>
      <p className='name'>{groceryListItem.name}</p>
      <p className='price'>{groceryListItem.price}</p>
    </li>
  )


  return (
    <div className='Page-container'>
      <div className="Page-small">

        <div className="Page-header">
          <div className="Page-title">
            <div>
              <h2>Groceries</h2>
              <p>Automatically create grocery list based on your planned meals and favourite recipes</p>
            </div>
          </div>
        </div>

        <SearchBar placeholder="Search ingredients for grocery list" onChange={""} appearance="default"/>  

        <div className='flex'>
          {/* GROCERY AREA */}
          <div className='Grocery-area'>
            <h3>Shop popular categories</h3>
            <div className='Grocery-category-list'>
              {groceryCategoryList}
            </div>
            <br></br>
            <h3>On sale</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="Form-input"
                placeholder='Type grocery item'
              />
              <button type="submit" className='Button-primary'>Add Item</button>
            </form>
            <ul>
              {items.map((item, index) => (
                <li key={item + index}>
                  {item}
                  <button onClick={() => handleDelete(index)} className="Button-delete">Delete</button>
                </li>
              ))}
            </ul>
          </div>


          {/* GROCERY CART */}
          <div className='Grocery-cart-container'>
            <img src={require("../images/shopping-basket.png")} className="Recipe-thumbnail"/>
            <h3><ShoppingCart/>Your cart</h3>
            <small>Based on your planned meals we have added the following ingredients to your grocery list </small>
            {groceryList}
            <button type="submit" className='Button-primary'><ShoppingCart size={24}/>Order now</button>
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default Groceries;



