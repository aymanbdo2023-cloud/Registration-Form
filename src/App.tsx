import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Success from './pages/Success';
import Register from './pages/Register';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="md">
        <Box sx={{ py: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Box>
      </Container>
    </>
  )
}

export default App;
