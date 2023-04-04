import React from 'react';
import './App.css';
function App() {  
  const [listItems, setListItems] = React.useState();

  let todoListItems = [
    'Laundry',
    'Dishes',
    'Sweep',
    'Feed Dog',
    'Clean Bathroom',
    'Dust'
  ];
  return (
    <div>
      <ul>
        {
          todoListItems.map((item, index) => {
            return <li key={index}>{item}</li>
          }) 
        }
      </ul>
        <input onMouseOver={(event) => {
            console.log('mouse over')
          }}
          onChange={
          (event) => {
            console.log(event)
          }}  
        />
    </div>
  );
    
}

export default App;
