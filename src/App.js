import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import BoxImg from './components/BoxImg/BoxImg';
import MaisPopulares from './components/MaisPopulares/MaisPopulares';

function App() {
  return (
    <div className="App">
      <Header/>
      <BoxImg/>
      <MaisPopulares/>
      <Footer/>
    </div>
  );
}

export default App;
