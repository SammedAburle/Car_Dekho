// import logo from './logo.svg';
import './App.css';
import FirstPage from './Components/FirstPage/FirstPage';
import NavBar from './Components/FirstPage/NavBar';
import Footer from './Components/Footer/Footer';
import CarSelector from './Components/SecondPage/CarSelector';
import ImageCarousel from './Components/ThirdPage/ImageCarousel ';


function App() {
  return (
    <div>
      <NavBar/>
      <FirstPage/>
      <CarSelector/>
      <ImageCarousel/>
      <Footer/>
  
    </div>
  );
}

export default App;
