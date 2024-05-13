import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu'; 
import logo_ligue1_verticale from '../../assets/img/logo_ligue1_verticale.png';
import user from '../../assets/img/user.png';
import './Menu.css';

export const UserContext = React.createContext();

const styles = {
  bmBurgerButton: {
    position: 'absolute', // Change 'fixed' to 'absolute'
    width: '36px',
    height: '30px',
    left: '20px', // Position à gauche
    top: '50%', // Centre verticalement
    transform: 'translateY(-50%)', // Centre verticalement
    backgroundColor: '#02153C',

  },
  bmBurgerBars: {
    background: 'white'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '25%', // Change '25%' to '100%'
    top: '0', // Change '50px' to '0'
    left: '0',
  },
  bmMenu: {
    background: '#02153C',
    padding: '3.5em 1.5em 0', // Increase the top padding to move down the content
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'block',
    color: '#CEFB03',
    textDecoration: 'none',
    fontSize: 'larger',
    lineHeight: '2', // Add this line to increase line spacing
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: '0',

  },

  logo: {
    width: 46,
    height: 75,
    padding: '5px 0 5px 0',
    
  },
  userIcon: {
    width: 50,
    height: 50,
  },
  bandeau: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    width: '100%',
    backgroundColor: '#02153C',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    zIndex: 999,
    borderBottom: '1px solid white', // Ajoute une bande blanche de 2px en bas du bandeau
  },

  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33.33%',
  },
  userSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '33.33%',
  },

  menuContainer: {
    position: 'relative',
  }
}
const Menu = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // Vérifier si le token est stocké
    setIsUserLoggedIn(localStorage.getItem('access_token') !== null);
  }, []);

  return (
    <div style={styles.menuContainer}>
      <div style={styles.bandeau}>
        <div style={styles.section}>
          <BurgerMenu styles={styles}>
            <Link id="home" className="menu-item" to="/">Home</Link>
            <Link id="equipe" className="menu-item" to="/equipe">Equipe</Link>
            <Link id="classement" className="menu-item" to="/classement">Classement</Link>
            <Link id="match" className="menu-item" to="/match">Match</Link>
            <Link id="topplayer" className="menu-item" to="/topplayer">Statistique</Link>
            <Link id="resumevideo" className="menu-item" to="/resumevideo">Résumé vidéo</Link>
          </BurgerMenu>
        </div>
        <div style={styles.section}>
          <Link to="/">
          <img src={logo_ligue1_verticale} alt="Logo Ligue 1" style={styles.logo} />
          </Link>
        </div>
        <div style={styles.userSection} >
        <Link to={isUserLoggedIn ? "/user" : "/login"}>
          <img src={user} style={styles.userIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Menu;