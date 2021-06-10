import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Animation from './components/Animation';

function App() {
  return (
    <div className="App ">
    <Header></Header>
    <Animation></Animation>
    <Footer></Footer>
    {/* <ParticlesBg type="random" bg={true}/> */}
    
    </div>
  );
}

export default App;
