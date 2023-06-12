import { useEffect, useState } from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { magic } from '../lib/magic-client';
import Loading from '../components/loading/loading';


export default function MyApp({ Component, pageProps }) {

    const router = useRouter();
    const [isLoading, setLoading] = useState(false);

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


    return isLoading ? <Loading/> : <Component {...pageProps} />
}