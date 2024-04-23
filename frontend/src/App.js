import './App.css';
import { ToastContainer } from "react-toastify"
import Header from './components/Header';
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import { Col, Container, Row } from "reactstrap";
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditCourse from './components/EditCourse';
import About from './components/About';


function App() {

  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact></Route>
                <Route path="/add-course" element={<AddCourse />}exact></Route>
                <Route path="/view-courses" element={<Allcourses />}exact></Route>
                <Route path="/edit-course/:id" element={<EditCourse />}exact></Route>
                <Route path="/about" element={<About />}exact></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>

    </div>
  );
}

export default App;
