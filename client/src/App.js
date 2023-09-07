// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route ,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Productmanagement from './components/Productmanagement';
import Addproduct from "./components/Addproduct";
import Listtproduct from "./components/Listtproduct";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Productmanagement/>}/>
        <Route path="/add" element={<Addproduct/>}/>
        <Route path="/list" element={<Listtproduct/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
