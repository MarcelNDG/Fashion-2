import './App.css';

import Model from './img/model.png'

import TopNav from './components/TopNav'
import Footer from './components/Footer'


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
     </main>
     <footer>
       <Footer />
     </footer>
      <img className='modelPic' src={Model} alt="Model" />
    </div>
  );
}

export default App;
