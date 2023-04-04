import React from 'react';
import './App.css';
function App() {  
  const [userEnteredTodo, setUserEnteredTodo] = React.useState("");
  const [listItems, setListItems] = React.useState([]);

  const saveItemAndClearInput = () => {
    setListItems([
      ...listItems,
      userEnteredTodo
    ])
  }
  
  return (
    <div>
      <ul>
        {
          listItems.map((item, index) => {
            return <li key={index}>{item}</li>
          }) 
        }
      </ul>
        <input 
          onChange={
          (event) => {
            setUserEnteredTodo(event.target.value)
          }}  
          onKeyDown={(event)=>{
            if(event.code=== "Enter"){
              saveItemAndClearInput();
            setUserEnteredTodo("");
          }
          }}
          value={userEnteredTodo}
        />
        <button 
          onClick={() => {
            
            saveItemAndClearInput();
            
          }}
        >Add</button>
    </div>
  );
    
}

export default App;
