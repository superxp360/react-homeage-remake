import './styles/App.css';
import Navb from './components/Navb';
import Mainbody from './components/Mainbody.jsx';
import ControlledCarousel from './components/Cards'
import Footer from './components/Footer';



function App() {
  return (
   <body className='bg-black'>
    <header id='home'>
        <Navb />  
      </header>
      <br></br>
      <main>
        <Mainbody />
        <ControlledCarousel />
      </main>
      <br></br>
      <footer>
        <Footer />
      </footer>
   </body>
  );
}

export default App;
