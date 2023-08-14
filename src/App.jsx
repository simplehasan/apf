// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TopNav from './components/TopNav';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <TopNav />
          <Routes>
            <Route exact path="/" Component={Home} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
