import styles from './navbar.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { magic } from '../../lib/magic-client';

const NavBar = (props) => {
    const router = useRouter();
    const [showDropDown, setShowDropDown] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        async function getUsername() {
            try {
                const { email, publicAddress } = await magic.user.getMetadata();
                if (email) {
                    setUsername(email);
                    console.log({ email });
                }else{
                    setUsername('SignIn');
                }
            } catch (e) {
                console.error('Something went wrong', e);
            }
        }
        getUsername();
    }, []);

    const handleOnClickHome = (e) => {
        e.preventDefault()
        router.push('/');
    };

    const handleOnClickMyList = (e) => {
        e.preventDefault()
        router.push('/browse/my-list');
    };

    const handleShoDropDown = (e) => {
        e.preventDefault()
        setShowDropDown(!showDropDown);
    };

    const handleSignout = async (e) => {
        e.preventDefault();
        try {
         await magic.user.logout();
         console.log(await magic.user.isLoggedIn());
         router.push('/login');
        } catch (error) {
          console.error("Error logging out", error);
          router.push('/login');
        }
      };

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <a className={styles.logoLink} href='/'>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/netflix.svg"
                                alt="Netflix logo"
                                width={128}
                                height={34}
                            />
                        </div>
                    </a>
                    <ul className={styles.navItems}>
                        <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
                        <li className={styles.navItem2} onClick={handleOnClickMyList}>MyList</li>
                    </ul>
                    <nav className={styles.navContainer}>
                        <div>
                            <button className={styles.usernameBtn} onClick={handleShoDropDown}>
                                <p className={styles.username}>{username}</p>
                                <Image
                                    src="/expand_more.svg"
                                    alt="Expand dropdown"
                                    width={24}
                                    height={24}
                                />
                            </button>
                            {showDropDown &&
                                <div className={styles.navDropdown}>
                                    <div>
                                        <a onClick={handleSignout}>
                                            <p className={styles.linkName}>Sign Out</p>
                                        </a>
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