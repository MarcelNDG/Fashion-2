import { BrowserRouter, Route, Switch } from 'react-router-dom'


import './App.css';



import Home from './Pages/Home'
import About from './Pages/About'
import Sale from './Pages/Sale'
import Stores from './Pages/Stores'
import Contact from './Pages/Contact'



function App() {

  const kek = "kek";

  console.log(kek);

  return (
     <BrowserRouter>
    <div className="App">     
          
        
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About} />
        <Route path='/sale' component={Sale} />
        <Route path='/stores' component={Stores} />
        <Route path='/contact' component={Contact} />

      </Switch>
    </div>
     </BrowserRouter>    
  );
}

export default App;
