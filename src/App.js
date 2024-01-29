
import Cord from './Component/Cord';
import Home from './Component/Home';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Map from './Component/Map'
import AddLocation from './Component/addLocation/AddLocation';

function App() {
  return (
  
    <div className="App">
      <Router>
         <Routes>
              
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/add' element={<AddLocation/>}/>
             
              <Route exact path='/map' element ={<Map/>}/>
         </Routes>

      </Router>
    </div>
  );
}

export default App;
