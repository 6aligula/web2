/*documento para editar head, etc*/
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
            <title>Systems Evolution</title>
                <meta name='description' content='Freelance dedicado al desarollo de paginas web, Apps moviles, internet de las cosas y reparaciones de electrónica' />
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css' />
                {/*  link a bootstrap  */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css"></link>

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}