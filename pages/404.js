import Link from "next/link";
import Layout from "../components/Layout";


const custom404 = () => {
    return (
        <div className="text-center">
            < Layout >
                <h1>404</h1>
                <p>Pagina no encontrada, por favor vuelve al inicio
                    <br />
                    <Link href="/">

                        <a > Home</a>
                    </Link>
                </p>
            </Layout >
        </div>
    )
}
export default custom404;