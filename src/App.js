import MovieList from "./Components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Trailers from "./Components/pages/Trailers";
// import Trailer from "./Components/pages/Trailer";
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              DanielFlix
            </NavLink>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link active" to="/trailers">
                  Trailers
                </NavLink>
                <NavLink className="nav-link active" to="/about">
                  About
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <header className="container">
          <h1
            style={{
              textAlign: "center",
              color: "red",
              padding: "30px",
            }}
          >
            DANIEL'S NETFLIX
          </h1>
          <Routes>
            <Route path="/" element={<MovieList />}></Route>
            <Route path="/trailers" element={<Trailers />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
