import logo from './logo.svg';
import './App.css';
import Navbar from './pages/componets/navbar/Navbar';
import HomePages from './pages/componets/HomePages/HomePages';
import RegistreMedia from './pages/componets/HomePages/RegistreMedia';
import Character from './pages/componets/HomePages/Character';
import HistoryComunity from './pages/componets/HomePages/HistoryComunity';
import Activitys from './pages/componets/HomePages/Activitys';
import FooterHome from './pages/componets/HomePages/FooterHome';
import Ubication from './pages/componets/HomePages/Ubication';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <HomePages></HomePages>
    <HistoryComunity></HistoryComunity>
    <Activitys></Activitys>
    <div>
      <Character></Character>
    </div>
    <Ubication></Ubication>
    <FooterHome></FooterHome>
    </>
    
  );
}

export default App;
