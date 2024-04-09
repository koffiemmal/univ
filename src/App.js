import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header/Header";
import Acceuil from "./components/pages/Acceuil/Acceuil";
import Portail from "./components/pages/Portail/Portail";
import Pheader from "./components/layouts/PortailHeader/Pheader";
import Login from "./components/pages/Register/Login";
import Sign from "./components/pages/Register/SIgn";
import Departement from "./components/pages/departements/Departement";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Acceuil />} />
            <Route path="filiere" element={<Departement/>}/>
          </Route>
          <Route path="/monPortail" element={<Pheader />}>
            <Route index element={<Portail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
