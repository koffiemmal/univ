
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/layouts/Header/Header";
import Acceuil from "./components/pages/Acceuil/Acceuil";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}>

<Route index element={<Acceuil/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
