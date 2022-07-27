import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import UpdateUser from './components/Update';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}

      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/adduser" element={<Form />} />
        <Route path="/update" element={< UpdateUser/>} />
      {/* <Table /> */}
      </Routes>
    </div>
  );
}

export default App;
