import './App.css';
import { Products, Navbar } from './components/';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/products"} element={<Products />}/>
      </Routes>
    </div>
  );
}
export default App;
