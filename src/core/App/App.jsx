import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Authorization from '../../components/Authorization/Authorization';
import Home from '../../components/Home/Home';
import Info from '../../components/Info/Info';
import Profile from '../../components/Profile/Profile';
import { getCookieValue } from '../../utils/utils';
import logo from './logo192.png';
import './App.css';
import Table from '../../components/Table/Table';

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const data = getCookieValue('authorization');

    setIsUserLoggedIn(data);
    setUserName(data);
  }, []);

  return (
    <Router>
      <div className='app'>
        <nav className='menu'>
          <ul className='menu__list'>
            <div className='menu__list-wrapper'>
              <img className='logo' alt='logo' src={logo} />
              <li className='menu__list-item'>
                <Link className='menu__list-link' to='/'>Home</Link>
              </li>
              <li className='menu__list-item'>
                <Link className='menu__list-link' to='/info'>Info</Link>
              </li>
              <li className='menu__list-item'>
                <Link className='menu__list-link' to={isUserLoggedIn ? '/profile' : '/authorization'}>Profile</Link>
              </li>
              {isUserLoggedIn && (
                <li className='menu__list-item'>
                  <Link className='menu__list-link' to='/table'>Table</Link>
                </li>
              )}
            </div>
            {isUserLoggedIn
              ? <p className='user-name'>{userName}</p>
              : (
                <li className='menu__list-item'>
                  <Link className='menu__list-link login' to='/authorization'>Log In</Link>
                </li>
              )}
          </ul>
        </nav>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/info'>
            <Info />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/table'>
            <Table />
          </Route>
          <Route path='/authorization'>
            <Authorization setIsUserLoggedIn={setIsUserLoggedIn} setUserName={setUserName} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
