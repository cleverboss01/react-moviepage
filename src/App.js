import MovieList from "./Components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
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
        <MovieList />
      </header>
    </div>
  );
}

export default App;
