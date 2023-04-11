import React from 'react';
import './App.css';
import ListItem from './ListItem';
import Input from './Input';

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
            return (
            <ListItem 
              item={item}
              index={index}
              listItems={listItems}
              setListItems={setListItems}
              />)
          }) 
        }
      </ul>
      <Input
        id={'input-id'}
        name={'user-entered-todo'}
        onChange={
          (event) => {
            setUserEnteredTodo(event.target.value)
          }}  
          onKeyDown={(event)=>{
            if(event.code === "Enter"){
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
