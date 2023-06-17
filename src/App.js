import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Surat from "./pages/Surat";
import Tafsir from "./pages/Tafsir";
import Doa from "./pages/Doa";
import ReadDoa from "./pages/ReadDoa";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/surat/:id"  element={<Surat/>}/>
        <Route path="/tafsir"  element={<Tafsir/>}/>
        <Route path="/list-doa"  element={<Doa/>}/>
        <Route path="/doa/:id"  element={<ReadDoa/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
