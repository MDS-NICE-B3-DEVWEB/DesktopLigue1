
import React, { useState, useContext } from 'react';
import { Image, Text } from 'react-native';  // Remplacer 'react-native' par 'react' pour les composants
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Remplacer les modules React Navigation
import Equipetop from './composant/Equipetop';
import LoginScreen from './composant/LoginScreen';
import RegisterScreen from './composant/RegisterScreen';
import UserContext from './composant/UserContext';
import userIcon from './composant/img/user.png';
import logo_ligue1_verticale from './composant/img/logo_ligue1_verticale.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../pages/Menu/Menu';
import Classement from '../pages/Classement/Classement';
import Equipe from '../pages/Equipe/Equipe';
import HomePage from '../pages/HomePage/HomePage';


const COLOR_BLACK = 'black';
const COLOR_CEFB03 = '#CEFB03';
const COLOR_02153C = '#02153C';

function CustomDrawerContent(props) {
  const { user } = useContext(UserContext);
  return (
    <div style={{ backgroundColor: COLOR_02153C, ...props.style }}>
      <DrawerItemList {...props} />
    </div>
  );
}

function CustomHeader({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <Image src={logo_ligue1_verticale} style={{ width: 32, height: 47, marginLeft: 115 }} />
      <div style={{ color: COLOR_CEFB03 }}>
        <UserMenu navigation={navigation} />
      </div>
    </div>
  );
}

function AuthStack() {
  return (
    <div>
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
    </div>
  );
}

function UserMenu({ navigation }) {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <img src={userIcon} style={{ width: 50, height: 50 }} alt="User Icon" />
      <div>
        {!user && (
          <Link to="/login" style={{ color: COLOR_BLACK }}>Login</Link>
        )}
        {!user && (
          <Link to="/register" style={{ color: COLOR_BLACK }}>Register</Link>
        )}
        {user && (
          <div onClick={() => setUser(null)} style={{ color: COLOR_BLACK }}>Logout</div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <MenuProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <div style={{ flex: 1 }}>
            <div style={{ height: 85 }}>
              <Equipetop />
            </div>
            <div style={{ flex: 1 }}>
              {/* Remplacer Drawer.Navigator par une liste de liens */}
              <div>
                <Link to="/accueil">Accueil</Link>
                <Link to="/classement">Classement</Link>
                <Link to="/equipe">Equipe</Link>
                <Link to="/auth">Auth</Link>
              </div>

              <div>
                <Route path="/accueil" component={HomePage} />
                <Route path="/classement" component={Classement} />
                <Route path="/equipe" component={Equipe} />
                <Route path="/auth" component={AuthStack} />
              </div>
            </div>
          </div>
        </Router>
      </UserContext.Provider>
    </MenuProvider>
  );
}

export default App;
