
import { Box } from '@chakra-ui/react';
import './App.css';
import LandingPage from './components/LandingPage';
import MatterSection from './components/MatterSection';
import AboutSection from './components/AboutSection';
import ImageSection from './components/ImageSection';
import TeamSection from './components/TeamSection';
import DownloadSection from './components/DownloadSection';


function App() {
  return (
    <Box position={'relative'} overflowX={'hidden'}>
     <LandingPage />
     <MatterSection />
     <AboutSection />
     <ImageSection />
     <TeamSection />
     <DownloadSection />
    </Box>
  );
}

export default App;
