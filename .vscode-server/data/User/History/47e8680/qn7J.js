import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu'; 
import logo_ligue1_verticale from '../../assets/img/logo_ligue1_verticale.png';
import user from '../../assets/img/user.png';

const styles = {
  // Styles du BurgerMenu
};

const Menu = () => {
  return (
    <div style={styles.menuContainer}>
      <div style={styles.bandeau}>
        <div style={styles.section}>
          <BurgerMenu styles={styles}>
            <Link id="home" className="menu-item" to="/home">Home</Link>
            <Link id="equipe" className="menu-item" to="/equipe">Equipe</Link>
            <Link id="classement" className="menu-item" to="/classement">Classement</Link>
            <Link id="match" className="menu-item" to="/match">Match</Link>
          </BurgerMenu>
        </div>
        <div style={styles.section}>
          <img src={logo_ligue1_verticale} alt="Logo Ligue 1" style={styles.logo} />
        </div>
        <div style={styles.userSection}>
          <Link to="/login">
            <img src={user} alt="User Icon" style={styles.userIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
