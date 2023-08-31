import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Cards from './pages/Cards';
import Calculator from './Components/Calculadora';
import Counter from './Components/Counter';
import Title from './Components/TituloPagina';
import NavBar from './Components/navbar';
import ToDo from './Components/ToDoList';
import { CounterProvider } from './Context/Counter';
import CounterPage from './pages/Counter';



function App() {
  return (
    <>
      <CounterProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/todo' element={<ToDo />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/title' element={<Title />} />
          <Route path='/counter' element={<CounterPage />} />
        </Routes>
      </CounterProvider>
    </>
  );
}
export default App;