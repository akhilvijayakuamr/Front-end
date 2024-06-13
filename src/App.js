import logo from './logo.svg';
import './App.css';
import UserHome from './Components/UserHome';
import UserLogin from './Components/UserLogin';
import UserRegister from './Components/UserRegister';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './Redux/Store';
import AdminLogin from './Components/AdminLogin';
import AdminHome from './Components/AdminHome';
import UpdateUser from './Components/UpdateUser';



function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Router>
          <Routes>
            <Route exact path='/' element={<UserLogin/>}/>
            <Route path='/signup' element={<UserRegister/>}/>
            <Route path='/userHome' element={<UserHome/>}/>
            <Route path='/admin' element={<AdminLogin/>}/>
            <Route path='/adminHome' element={<AdminHome/>}/>
            <Route path='/edituser' element={<UpdateUser/>}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
