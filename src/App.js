


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Doctors from './Pages/Doctors/Doctors/Doctors';
import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Services/Services';
import ServiceDetails from './Pages/ServicesDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/serviceetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
