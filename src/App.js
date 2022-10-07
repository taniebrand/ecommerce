import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import MapComponent from './components/MapComponent';


function App() {
  return (
<>
    <NavBar />
    <ItemListContainer greeting={"Welcome to Satelit Art"} />
    <MapComponent />
    </>
   
  );
}

export default App;
