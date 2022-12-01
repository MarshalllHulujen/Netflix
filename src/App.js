import "./App.css";
import { Header2 } from "./component/Header2";
import { Header1 } from "./component/Header1";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="Homepage">
      <BrowserRouter>
        <Routes>
          <Route path="/Header1" element={Header1} />
          <Route path="/Header2" element={Header2} />
        </Routes>      
      </BrowserRouter>
      <Header1/>
    </div>
  );
}

export default App;
