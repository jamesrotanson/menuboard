import React, { useState, useEffect } from 'react';
import {db} from "../firebase-config"
import {
    collection,
    doc,
    addDoc,
    updateDoc,
    deleteDoc, 
    onSnapshot
} from "firebase/firestore"
import Twemoji from 'react-twemoji';
import {Minus, Plus, ShoppingCart, Storefront, Trash, } from 'phosphor-react';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import ConnectAppsActions from '../components/ConnectAppsActions';
import LoadingPage from './LoadingPage';
import FeedbackCollector from '../components/FeedbackCollector';
import GroceryListItem from '../components/GroceryListItem';


const Groceries = () => {

  // Loader
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 1000);

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



  // Quick add
  const frequentGroceriesData = [
    {id: 1, name: "Egg", emoji: "🥚", color: "#FFF3EB"},
    {id: 2, name: "Steak", emoji: "🥩", color: "#FCDCDB"},
    {id: 3, name: "Chilli", emoji: "🌶", color: "#FFCAD1"},
    {id: 4, name: "Orange", emoji: "🍊", color: "#FFD195"},
    {id: 5, name: "Cheese", emoji: "🧀", color: "#FFF0CD"},
    {id: 6, name: "Broccoli", emoji: "🥦", color: "#D3FFDA"},
    {id: 7, name: "Fish", emoji: "🐟", color: "#DAEFFF"},
    {id: 8, name: "Milk", emoji: "🥛", color: "#BED0FF"},
    {id: 9, name: "Bread", emoji: "🍞", color: "#E2C7BB"},
    // {id: 10, name: "More", emoji: "🧺", color: "#F9F9F9"},
  ];

  const frequentGroceryList = frequentGroceriesData.map((frequentGroceryItem) => 
    <li className="Grocery-category-tile" style={{background: frequentGroceryItem.color}}>
    <Twemoji options={{ className: 'twemoji' }}>
      <p>{frequentGroceryItem.emoji}</p>
    </Twemoji>
    <p>{frequentGroceryItem.name}</p>
  </li>
  )


  // Get ingredients from database

  const groceryIngredientsListRef = collection(db, "ingredients")
  const [groceryIngredientsList, setGroceryIngredientsList] = useState([])

  useEffect(() => {
    onSnapshot(groceryIngredientsListRef, snapshot => {
      setGroceryIngredientsList(snapshot.docs.map(doc => {
        return {
          id: doc.id, 
          ...doc.data()
        }
      }))
    })
  }, [])
  

  // Remove recipe
  const handleDeleteIngredient = (id) => {
    console.log(id)
    deleteDoc(doc(db, "ingredients", id))
  }
  return (
    <div>
      {loading ? <LoadingPage/> : 
      <div className='Page-container'>
        <div className="Page-small">

          <div className="Page-header">
            <div className="Page-title">
              <div>
                <h2>Groceries</h2>
                {/* <p>Automatically create grocery list based on your planned meals and favourite recipes</p> */}
              </div>
            </div>
          </div>

          <div className='Grocery-container'>
            {/* GROCERY AREA */}
            <div className='Grocery-area'>
              {/* <br></br>
              <div className='flex'>
                <ShoppingCart size={32}/>
                <h3> Your grocery list</h3>
              </div>
              
              <p>Search for grocery items to add to your list. In the future, we will automatically add frequent ingredients based on your planned meals. </p>
              <br></br> */}
              <div className='Grocery-category-list'>
                {frequentGroceryList}
              </div>
              <br></br>

              <h4>Add ingredients here</h4>
              <br></br>
              <form onSubmit={handleSubmit} 
                className="Grocery-form-add-container"
              >
                <Button type="submit" appearance="default Button-icon" iconBefore={<Plus/>} />
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="Form-input Form-input-subtle"
                  placeholder='Type grocery items like apples, milk, or Doritos'
                />
                
              </form>
              
              <ul className="Grocery-list">
                {/* {groceryList} */}
                {items.map((item, index) => (
                  <GroceryListItem
                    key={item + index}
                    name={item}
                    onDelete={() => handleDelete(index)}
                  />
                ))}

                
              </ul>

              <br></br>
              <h4>Added from your  on your planned meals</h4>
              <br></br>
              <ul className="Grocery-list">
                {groceryIngredientsList.map((ingredient) => {
                  return(
                    <GroceryListItem
                      key={ingredient.id}
                      name={ingredient.name}
                      onDelete={() => handleDeleteIngredient(ingredient.id)}
                    />
                  )
                })}
              </ul>
              
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              {/* <Button name="Order now" appearance="primary" iconBefore={<ShoppingCart/>}/> */}
              <div className='flex'>
                <Storefront size={32}/>
                <h3> Connect to marketplace</h3>
              </div>
              <p>Connect to your local grocery stores to get your grocery list instantly delivered</p>
              <br></br>
              <br></br>
              <ConnectAppsActions/>
            </div>


            {/* GROCERY CART */}
            {/* <div className='Grocery-cart-container'>
              <img src={require("../images/shopping-basket.png")} className="Recipe-thumbnail"/>
              
            </div> */}
            
    
          </div>
        </div>
        <FeedbackCollector/>
      </div>
    }
    </div>
  );
};

export default Groceries;



