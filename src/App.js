import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros.js";
import Home from "./pages/Home.js"
import Layout from "./components/Layout/Layout.js";
import React from "react"
import Contacto from "./components/Contacto/Contacto.js";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobreNosotros" element={<SobreNosotros/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
