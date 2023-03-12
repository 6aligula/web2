import Link from "next/link"
const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container">
                    <a className="navbar-brand" href="/">Systems Evolution</a>

                    <div className=" navbar-collapse ">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml ">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link active" aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/webs">
                                    <a className="nav-link">Diseño de paginas </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/upgrade_systems">
                                    <a className="nav-link">Actualización de sistemas</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/mobile">
                                    <a className="nav-link">Apps Android e iOS</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/iot">
                                    <a className="nav-link">Iot</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/electronica">
                                    <a className="nav-link" >Electrónica</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/github">
                                    <a className="nav-link">Github</a>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </header>

    )
}

export default Navbar