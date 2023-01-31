import './App.css';
import NavbarNote from './components/navbar/navbar_note';
import Notes from './components/Notesapp/notes';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="*" element={[(<NavbarNote/>),(<Notes />)]} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
