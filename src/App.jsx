// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TopNav from './components/TopNav';
import { ThemeProvider } from './context/ThemeContext';
import Login from './pages/Login';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js"

Chart.register(CategoryScale);

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <TopNav />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/login" Component={Login} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
