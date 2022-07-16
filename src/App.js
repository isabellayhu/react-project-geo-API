// import logo from './logo.svg';
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
  Form,
  InputGroup,
  FormControl,
  FloatingLabel
} from 'react-bootstrap';
import {
  Search
} from 'react-bootstrap-icons';

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
        <Form className="mb-3" id="searchForm">
          <Form.Label>Location</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search"
            />
            <Button variant='outline-secondary' type="submit">
              <Search />
            </Button>
          </InputGroup>
        </Form>

        <Form.Label>Coordinates</Form.Label>
        <div className="row g-2">
          <div className="col-md">
            <FloatingLabel controlId="floatingLongitude" label="Longitude">
              <Form.Control type="number" placeholder="Longitude" disabled/>
            </FloatingLabel>
          </div>
          <div className="col-md">
            <FloatingLabel controlId="floatingLatitude" label="Latitude">
              <Form.Control type="number" placeholder="Latitude" disabled/>
            </FloatingLabel>
          </div>
        </div>
      </main>
      <nav className="container">
        <Link to="/">Exit</Link>
      </nav>
    </>
  );
}

export default App;