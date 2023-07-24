import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import Breeds from './components/Breeds';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Service from './components/Service';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <Header />
      <main>
        <Homepage />
        <About />
        <Service />
        <Breeds />
        <Shop />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}

export default App;
