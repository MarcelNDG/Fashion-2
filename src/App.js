import { BrowserRouter, Route, Switch} from 'react-router-dom'


import './App.css';

import Model from './img/model.png'

import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import SeasonMenu from './components/SeasonMenu'
import SphereBig from './components/SphereBig'

import Home from './Pages/Home'
import About from './Pages/About'



function App() {

  const kek = "kek";

  console.log(kek);

  return (
     <BrowserRouter>
    <div className="App">
     <header>       
       <TopNav />             
     </header>
     <main>
      <h1 className='logo'>FASHION <br></br><span>FASCINATION</span></h1>
      <div className='seasonSearchContainer'>
        <SeasonMenu />
        <Searchbar />
      </div>
      <SphereBig />              
     </main>
     <footer>
       <Footer />
     </footer>
     <div className="image-container">
      <img className='modelPic' src={Model} alt="Model" />
     </div>
        
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About} />

      </Switch>
    </div>
     </BrowserRouter>    
  );
}

export default App;
