import './App.css';
import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
} from 'react-bootstrap';
import SearchForm from './Search'
import ResultForm from './Result';

function App() {
  return (
    <>
      <header className="container">
        <h1>Coordinates Finder</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="main" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

function Home() {
  return (
    <>
      <main className="container">
        <Button variant="secondary" href="/main" className="text-uppercase d-grid gap-2">
        Welcome and click to enter
        </Button>
      </main>
    </>
  );
}

function Main() {
  return (
    <>
      <main className="container">
        <SearchForm/>
        <ResultForm/>
      </main>
      <nav className="container">
        <Link to="/">Exit</Link>
      </nav>
    </>
  );
}

export default App;