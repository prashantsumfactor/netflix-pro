import styles from './navbar.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

const NavBar = (props) => {
    const { userName } = props;
    const router = useRouter();
    const [showDropDown, setShowDropDown] = useState(false);

    const handleOnClickHome = (e) => {
        e.preventDefault()
        router.push('/');
    };

    const handleOnClickMyList = (e) => {
        e.preventDefault()
        router.push('/browse/my-list');
    };

    const handleShoDropDown =(e)=>{
        e.preventDefault()
        setShowDropDown(!showDropDown);
    };

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <a className={styles.logoLink} href='/'>
                        <div className={styles.logoWrapper}>
                            Netflix
                        </div>
                    </a>
                    <ul className={styles.navItems}>
                        <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
                        <li className={styles.navItem2} onClick={handleOnClickMyList}>MyList</li>
                    </ul>
                    <nav className={styles.navContainer}>
                        <div>
                            <button className={styles.usernameBtn} onClick={handleShoDropDown}>
                                <p className={styles.username}>{userName}</p>
                            </button>
                            {showDropDown &&
                                <div className={styles.navDropdown}>
                                    <div>
                                        <Link href="/login">
                                            <p className={styles.linkName}>Sign Out</p>
                                        </Link>
                                        <div className={styles.lineWrapper}></div>
                                    </div>
                                </div>
                            }
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;