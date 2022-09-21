import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Liked from "./pages/liked/Liked";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Route path="/home" element={<Home />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
