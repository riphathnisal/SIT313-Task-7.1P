import Navbar from './components/Navbar';
import './App.css';
import Homepage from './components/Homepage';
import Featured from './components/Featured';
import Tutorials from './components/Tutorials';
import Bar from './components/Bar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Featured />
      <Tutorials />
      <Bar />
      <Footer />

    </div>
  );
}

export default App;
