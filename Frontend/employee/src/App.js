import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import EmpTable from './Components/Emptable';
import EmpAdd from './Components/Empadd';
import EmpEdit from './Components/EmpEdit';
import EmpDelete from './Components/EmpDelete';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<EmpTable />} />
        <Route path='/add' element={<EmpAdd />} />
        <Route path='/edit' element={<EmpEdit />} />
        <Route path='/delete' element={<EmpDelete />} />
      </Routes>
    </div>
  );
}

export default App;