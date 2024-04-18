const Menu = () => {
  return (
    <div style={styles.menuContainer}>
      <div style={styles.bandeau}>
        <div style={styles.section}>
          <BurgerMenu styles={styles}>
            <Link id="home" className="menu-item" to="/home">Home</Link>
            <Link id="equipe" className="menu-item" to="/equipe">Equipe</Link>
            <Link id="classement" className="menu-item" to="/classement">Classement</Link>
          </BurgerMenu>
        </div>
        <div style={styles.section}>
          <img src={logo_ligue1_verticale} alt="Logo Ligue 1" style={styles.logo} />
        </div>
        <div style={styles.section}>
          <img src={user} alt="User Icon" style={styles.userIcon} />
        </div>
      </div>
    </div>
  );
};