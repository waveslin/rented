import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {VisibilityProvider} from './components/context/Visibility.jsx'
import Navigation from './components/navigation/Navigation.jsx'
import Home from './components/home/Home.jsx';
import Contact from './components/contact/Contact.jsx'
import Signup from './components/signup/Signup.jsx'
import Login from './components/login/Login.jsx';
import Footer from './components/footer/Footer.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx';
import PageNotFound from './components/404/PageNotFound.jsx';

const App = ()=> {
  return (
    <>
      <VisibilityProvider>
        <Router data-test='App-router'>
          <Navigation data-test='App-navigation' />
          <Switch data-test='App-url-switch' >
            <Route exact path='/' component={Home}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route path='/' component={PageNotFound} />
          </Switch>
          <Footer data-test='App-footer' />
        </Router>
      </VisibilityProvider>
    </>
  );
}

export default App;
