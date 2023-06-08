import { useEffect } from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { magic } from '../lib/magic-client';


export default function MyApp({ Component, pageProps }) {

    const router = useRouter();

    useEffect(() => {
        async function getLoginStatus() {
            try {
                const isLoggedIn = await magic.user.isLoggedIn();
                if (isLoggedIn) {
                    // route to /
                    console.log('login');
                    router.push("/");
                  } else {
                    // route to /login
                    console.log('not login');
                    router.push("/login");
                  }
            } catch (error) {
                console.log("Error retrieving login sttaus:", error);
            }
        }
        getLoginStatus();
    }, [])


    return <Component {...pageProps} />
}