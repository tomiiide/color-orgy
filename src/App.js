import './App.css';
import { BrowserRouter } from "react-router-dom";
import Paths from './utils/paths/Paths';


function App() {
  return (
    <div className="App dark">
      <BrowserRouter>
        <Paths />
      </BrowserRouter>
    </div>
  );
}

export default App;
