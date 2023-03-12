import 'bootswatch/dist/slate/bootstrap.min.css';
import '../styles/global.css';
import { Head } from 'next/document'

/*configurar la aplicacion */
function MyApp({ Component, pageProps }) {
    return (
        <Component {...pageProps} />

        // <>
        //     <Head>
        //         <title>Systems Evolutio</title>
        //     </Head>
        //     <Component {...pageProps} />
        // </>
    )

}
export default MyApp;