import './App.css';

import Model from './img/model.png'

import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import SeasonMenu from './components/SeasonMenu'


function App() {

  const kek = "kek";

  console.log(kek);

  return (
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
              
     </main>
     <footer>
       <Footer />
     </footer>
     <div className="image-container">
      <img className='modelPic' src={Model} alt="Model" />
     </div>
        
    </div>
  );
}

export default App;
