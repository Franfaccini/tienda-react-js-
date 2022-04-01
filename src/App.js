import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'


function App() {
  return (
       <div>
      
          <NavBar/>
   
      
          <ItemListContainer text=" TORNERIA EN GENERAL "/>
          
          

        
          
         <ItemCount/>
      </div>
  );
}

export default App;
