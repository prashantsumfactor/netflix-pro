import styles from '../styles/Login.module.css';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { magic } from '@/lib/magic-client';

const Login = () => {

    console.log({ magic });
    const [userMsg, setUserMsg] = useState('')
    const [email, setEmail] = useState('')
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();

    useEffect (()=>{
        const handleComplete = () => {
            setLoading(false);
        }
        router.events.on("routeChangeComplete",handleComplete);
        router.events.on("routeChangeError",handleComplete);
        return ()=>{
            router.events.off("routeChangeComplete",handleComplete);
            router.events.off("routeChangeError",handleComplete);
        };
    },[router]);

    const handleOnChangeEmail = (e) => {
        setUserMsg('')
        e.preventDefault();
        console.log('Hi email', e);
        setEmail(e.target.value);
    }

    const handleLoginWithEmail = async (e) => {
        e.preventDefault();
        console.log('Hi button');
        if (email) {
                setLoading(true);
                try {
                    console.log('Email=',email);
                    const didToken = await magic.auth.loginWithMagicLink({ email });
                    if(didToken){
                        console.log('didToken', didToken);
                        router.push('/');
                    }
                } catch {
                    // Handle errors if required!
                    setLoading(false);
                    console.log('something went wrong');
                }
            setUserMsg('')
        } else {
            setLoading(false);
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
                    <button className={styles.loginBtn} onClick={handleLoginWithEmail}>
                        {isLoading ? 'Loading...' :'Sign In'}
                    </button>
                </div>
            </main>
        </div>
    );
}


export default Login;