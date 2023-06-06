import styles from '../styles/Login.module.css';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {

    const [userMsg,setUserMsg] = useState('')
    const [email,setEmail] = useState('')
    const router = useRouter();

    const handleOnChangeEmail = (e) => {
        setUserMsg('')
        e.preventDefault();
        console.log('Hi email',e);
        setEmail(e.target.value);
    }

    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        console.log('Hi button');
        if(email){
            if(email==='pra@gm.com'){
                router.push('/');
            }
            setUserMsg('')
        }else{
            setUserMsg('Enter a valid email address')
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Netflix SignIn</title>
            </Head>
            <header className={styles.header}>
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
            </header>
            <main className={styles.main}>
                <div className={styles.mainWrapper}>
                    <h1 className={styles.signinHeader}>Sign In</h1>
                    <input className={styles.emailInput} onChange={handleOnChangeEmail} type='text' placeholder='Email Address' />
                    <p className={styles.userMsg}>{userMsg}</p>
                    <button className={styles.loginBtn} onClick={handleLoginWithEmail}>Sign In</button>
                </div>
            </main>
        </div>
    );
}


export default Login;