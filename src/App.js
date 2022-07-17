import './App.css';
import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Card
} from 'react-bootstrap';
import Main from './Main'
import SavedPlaces from './SavedPlaces'

function App() {
  return (
    <Card style={{background:'#ffffffd0', padding:'2em', borderRadius:'30px'}}>
      <header className="container">
        <h1>Coordinates Finder</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="savedPlaces" element={<SavedPlaces />} />
        </Routes>
      </Router>
    </Card>
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

export default App;