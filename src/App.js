
import './App.css';
import NavigationBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './components/calculator';


function App() {
  return (
    <>
      <NavigationBar/>

      
      <div className='container page-css main-container'>

        <Calculator/>
      </div>


      
      
    </>
  );
}

export default App;
