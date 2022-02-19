import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
