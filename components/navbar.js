import styles from './navbar.module.css';

const NavBar = (props) => {
    const { userName } = props;
    return (
        <div>
            <div className={styles.container}>Logo</div>

            <ul className={styles.navItems}>
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem2}>MyList</li>
            </ul>
            <nav className={styles.navContainer}>
                <div>
                    <button className={styles.usernameBtn}>
                        <p className={styles.username}>{userName}</p>
                    </button>
                    <div className={styles.navDropdown}>
                        <a className={styles.linkName}>Sign Out</a>
                        <div className={styles.lineWrapper}></div>
                        </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;