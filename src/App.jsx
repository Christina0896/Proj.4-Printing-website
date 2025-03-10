import Topbar from './components/topbar';
import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import Mainsection from './components/mainsection';
import ClickableList from './components/ClickableList';
import CardSlide from './components/cardSlide';

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <HeroSection />
      <Mainsection />
      <ClickableList />
      <CardSlide />
    </div>
  );
}

export default App;
