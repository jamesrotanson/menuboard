import React, { useState } from 'react';
import Twemoji from 'react-twemoji';
import { IconContext, MagnifyingGlass, Minus, Plus, ShoppingCart, Trash, } from 'phosphor-react';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import ConnectAppsActions from '../components/ConnectAppsActions';


const Groceries = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const [itemQuantity, setItemQuantity] = useState(1)

  

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

  const handleAddQty = () => {
    setItemQuantity(itemQuantity + 1)
  }

  const handleReduceQty = () => {
    
    if(itemQuantity === 0){
      setItemQuantity(itemQuantity === 0)
    }
    setItemQuantity(itemQuantity - 1)
  }


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

        <div className='Grocery-container'>
          {/* GROCERY AREA */}
          <div className='Grocery-area'>
            <br></br>
            <h3>Popular categories</h3>
            <div className='Grocery-category-list'>
              {groceryCategoryList}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h3><ShoppingCart/>Your grocery list</h3>
            <small>Based on your planned meals we have added the following ingredients to your grocery list </small>
            <form onSubmit={handleSubmit} className="Grocery-form-add-container">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="Form-input"
                placeholder='Type grocery item'
              />
              <Button type="submit" appearance="secondary" name="Add item" iconBefore={<Plus/>} />
            </form>
            <ul>
              {/* {groceryList} */}
              {items.map((item, index) => (
                <li className='Grocery-cart-item' key={item + index}>
                  <input type="checkbox"/>
                  <Twemoji options={{ className: 'twemoji' }}>
                    <p></p>
                  </Twemoji>
                  <p className='name'>{item}</p>
                  {/* <p className='price'>$0</p> */}
                  <div className='Button-group-calc'>
                    <Button appearance="default" iconBefore={<Plus/>} onClick={handleAddQty}/>
                    <input type="number" value={itemQuantity} className='Form-input'/>
                    <Button appearance="default" iconBefore={<Minus/>} onClick={handleReduceQty}/>
                  </div>
                  <Button onClick={() => handleDelete(index)} appearance="delete" iconBefore={<Trash/>}/>
                </li>
              ))}
            </ul>
            
            
            {/* <Button name="Order now" appearance="primary" iconBefore={<ShoppingCart/>}/> */}
            <ConnectAppsActions/>
          </div>


          {/* GROCERY CART */}
          {/* <div className='Grocery-cart-container'>
            <img src={require("../images/shopping-basket.png")} className="Recipe-thumbnail"/>
            
          </div> */}
  
        </div>
      </div>
    </div>
  );
};

export default Groceries;



