
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './components/Nav Bar/navbar.jsx';
import FoodItems from './components/Fooditems/food';
const items=[{
  img_url:'https://images.unsplash.com/photo-1652765678626-cebff1f7777f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80',
  name:'Mojito',
  desc:'Some quick example text to build on the card title and make up the bulk of the cards content.'
},
{
  img_url:'https://images.unsplash.com/photo-1671326692301-cd444207a0d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzMnx4alBSNGhsa0JHQXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  name:'Cookies',
  desc:'Some quick example text to build on the card title and make up the bulk of the cards content.'
},
{
  img_url:'https://images.unsplash.com/photo-1676018407020-35d550638b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  name:'Juices',
  desc:'Some quick example text to build on the card title and make up the bulk of the cards content.'
}]

function App() {
  console.log(items)
  return (
    <>
    <Bar />
    <FoodItems gsce={items}/>
    </>
  );
}

export default App;
