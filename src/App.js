import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import NotFound from './Component/NotFound';
import Reviews from './Component/Reviews';
import Dashboard from './Component/Dashboard'
import Blog from './Component/Blog';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
       
        <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="home" element={<Home/>}></Route>
              <Route path="review" element={<Reviews/>}></Route>
              <Route path="dash" element={<Dashboard/>}></Route>
              <Route path="blog" element={<Blog/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
