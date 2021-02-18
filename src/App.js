import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import MainNavbar from './Components/UI/Navbar/Navbar'
import {Container} from "react-bootstrap";
import Controller from "./Containers/Controller";

function App() {
  return (
    <div className="App" >
      <MainNavbar />
      <Container>
        <Controller />
      </Container>
    </div>
  );
}

export default App;
