import logo from './logo.svg';
import './App.css';
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import NavBar from './Components/navbar';
import AddExtract from './Components/addExtract';
import ShowExtract from './Components/showExtract';
import { ExtractProvider } from './Context/Extract';



function App() {
  return (
    <>
      <ExtractProvider>

        <NavBar />
        <Routes>
          <Route path='/add' element={<AddExtract />} />
          <Route path='/show' element={<ShowExtract />} />
        </Routes>
      </ExtractProvider>
    </>
  );
}

export default App;
