import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from 'nprogress';
import Footer from './Footer';

const Layout = ({ children, footer = true, title }) => {
    /*funcion para llamar una sola vez al router*/
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = url => {
            console.log(url);
            /*llamar al loader*/
            NProgress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange);
        /*Terminar el Nprogrees cuando la ruta a cargado ya*/
        router.events.on('routeChangeComplete', () => NProgress.done());
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        }
    }, []);

    return (
        <div>


            <Navbar />
            <main className="container py-4">
                {
                    <h1 className="text-center text-light">
                        {title}
                    </h1>
                }

                {children}
            </main>

            {
                footer && (
                    <Footer />
                )
            }
        </div>
    )
}

export default Layout