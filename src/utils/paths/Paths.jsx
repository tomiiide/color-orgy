import { render } from "react-dom";
import {
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "../../pages/homepage/Homepage";

const Paths = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Homepage />}/>
    </Routes>
    </div>
  )
}

export default Paths