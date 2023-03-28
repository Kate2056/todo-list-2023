
import './App.css';
function App() {  
  const todoListItems = [
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
          todoListItems.map((item) => {
            return <li>{item}</li>
          }) 
        }
      </ul>

    </div>
  );
    
}

export default App;
