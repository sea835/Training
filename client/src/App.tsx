import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DishList } from "./components/DishComponent/DishList";
import { HomePages } from './pages/HomePages';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/home" element={<DishList />} />
          <Route path="/discount" element={<DishList />} />
          <Route path="/dashboard" element={<DishList />} />
          <Route path="/messages" element={<DishList />} />
          <Route path="/notifications" element={<DishList />} />
          <Route path="/settings" element={<DishList />} />
          <Route path="/logout" element={<DishList />} />
        </Routes>
    </Router>
  );
}

export default App;
