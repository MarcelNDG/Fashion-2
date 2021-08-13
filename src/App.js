import { BrowserRouter, Route, Switch } from 'react-router-dom'


import './App.css';



import Home from './Pages/Home'
import About from './Pages/About'



function App() {

  const kek = "kek";

  console.log(kek);

  return (
     <BrowserRouter>
    <div className="App">     
     
     
        
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About} />

      </Switch>
    </div>
     </BrowserRouter>    
  );
}

export default App;
