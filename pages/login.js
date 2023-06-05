import styles from '../styles/login.module.css';
import Head from 'next/head';
import Image from 'next/image';



const Login = () => {

    const handleLoginWithEmail=(e)=>{
        e.preventDefault();
        console.log('Hi button');
    }

    return (
        <div className={styles.container}>  
            <Head>
                <title>Netflix SignIn</title>
            </Head>

            <header>
                <div className={styles.headerWrapper}>
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
                </div>
                <main className={styles.main}>
                  <div className={styles.mainWrapper}>
                  <h1 className={styles.signinHeader}>Sign In</h1>
                    <input className={styles.emailInput} type='text' placeholder='Email Address'/>
                    <button className={styles.loginBtn} onClick={handleLoginWithEmail}>Sign In</button>
                  </div>
                </main>
            </header>
        </div>
    );
}


export default Login;