import HeroSlider from '../Components/HeroSlider/HeroSlider';
import VideoReels from '../Components/VideoReels/VideoReels';
import Catalog from '../Components/Catalog/Catalog';
import AboutSection from '../Components/AboutSection/AboutSection';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <HeroSlider/>
      <VideoReels/>
      <Catalog/>
      <AboutSection/>
      {/* <Subscribe/> */}
    </div>
  );
}

export default App;
