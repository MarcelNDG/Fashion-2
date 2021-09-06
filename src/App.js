import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useEffect } from 'react'


import './App.css';

import Home from './Pages/Home'
import About from './Pages/About'
import Sale from './Pages/Sale'
import Stores from './Pages/Stores'
import Contact from './Pages/Contact'




function App() {

  useEffect(() => {
    const userBtn = document.getElementById('userButton')
    const profileMenu = document.getElementById('profileMenu')
    console.log(profileMenu, userBtn);

    function showMenu() {
      if(profileMenu.classList.contains('showMenu')){
        profileMenu.classList.remove('showMenu')
        console.log('removed');
      } else{
        profileMenu.classList.add('showMenu')
        console.log('added');
      }
    }

    

    userBtn.addEventListener("click",showMenu)

    return () => {
      
    }
  }, [])

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
