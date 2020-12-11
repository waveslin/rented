import './App.scss';
import {useReducer} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {VisibilityProvider} from './components/context/Visibility.jsx'
import Navigation from './components/navigation/Navigation.jsx'
import Home from './components/home/Home.jsx';
import Contact from './components/contact/Contact.jsx'
import Signup from './components/signup/Signup.jsx'
import Login from './components/login/Login.jsx';
import Footer from './components/footer/Footer.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx';
import Payment from './components/payment/Payment.jsx';
import Account from './components/account/Account.jsx';
import PageNotFound from './components/404/PageNotFound.jsx';
import {authReducer} from './components/reduce/useAuth';

const App = ()=> {

  const [auth, authDispatch] = useReducer(authReducer, {login: false, token: null})

  return (
    <>
      <VisibilityProvider>
        <Router data-test='App-router'>
          <Navigation data-test='App-navigation' auth={auth}/>
          <section className='App-section'>
            <Switch data-test='App-url-switch' >
              <Route exact path='/' component={Home} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login'>
                <Login authDispatch={authDispatch}/>
              </Route> />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/payment' component={Payment} />
              <Route exact path='/account' component={Account} />
              <Route path='/' component={PageNotFound} />
            </Switch>
          </section>
          <Footer data-test='App-footer' />
        </Router>
      </VisibilityProvider>
    </>
  );
}

export default App;
