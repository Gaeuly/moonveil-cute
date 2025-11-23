import { Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import About from './sections/About';
import Feature from './sections/Feature';
import Faq from './sections/Faq';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import Invite from './components/Invite';

function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Faq />
      <Footer />
    </>
  );
}

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </main>
  );
}

export default App;