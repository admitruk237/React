import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFoutd from './components/NotFoutd';
import MayLayout from './layouts/MayLayout';
import Courses from './components/Courses';
import SingleCourse from './components/SingleCourse';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MayLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:slug" element={<SingleCourse />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFoutd />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
