import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './compontens/Layout/NavBar';
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import './App.css'

export default function App() {


    return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/> } />
          <Route path="/book/:id" element={<BookDetailPage/> } /> 
        </Routes>

      </BrowserRouter>
  );
}
