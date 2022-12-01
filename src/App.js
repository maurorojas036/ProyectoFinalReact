
import { Route, Routes} from 'react-router-dom';
import './App.css';

// Pages
import Home from './Pages/Home';
import Country from './Pages/Country';
import League from './Pages/League';
import Detail from './Pages/Detail';
import Teams from './Pages/Teams'

// Component
import NavApp from './Component/Nav/Nav';


//Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>

      <NavApp/>

      {/* Aca voy a hacer el ruteo */}
      <Routes>
        <Route
          exact
          element={<Home/>}
          path='/'
        />
        <Route
          element={<Country/>}
          path='/Country'
        />
        <Route
          element={<Detail/>}
          path='/Country/Detail/:country' 
        />
        <Route
          element={<League/>}
          path='/League'
        />
        <Route
            element={<Teams/>}
            path='/League/Detail/:id/:season'
        />
        <Route
          element={<Contact/>}
          path='/Contact'
        />
        <Route
          element={<NotFound/>}
          path='*'
        />
      </Routes>
    </div>
  );
}

export default App;
