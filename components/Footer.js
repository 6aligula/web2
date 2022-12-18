//import React from 'react'
//import '../styles/footer.css'
//import icono from '../img/icono.png'

const Footer = () => {
    return (
        <div className="container">
            <footer className="bg-dark text-light text-center">
                <div className='row'>
                    <div className="col-md-3">
                        &copy;  Vinicio Naranjo &middot;
                        <p>2000 - {new Date().getFullYear()}</p>
                        <p>All rights Reserved</p>
                    </div>
                    <div className="col-md-3 social">
                        <p>
                            <a href="mailto:vinicio.naranjo15@gmail.com">
                                <i className="bi bi-envelope"></i>
                                E-mail
                            </a>
                        </p>
                    </div>
                    <div className="col-md-3 social">
                        <p>
                            <a href="https://api.whatsapp.com/send?phone=+34711717713" target="_blank">
                                <i className="bi bi-whatsapp"></i>
                                WhatsApp
                            </a>
                        </p>
                    </div>

                </div>
                <br></br>
                <div className='row'>
                    <div className='col-sem-12'>
                        <p>
                            <a href="#">
                                <i className='bi bi-arrow-up-circle-fill '>
                                </i>

                            </a>
                        </p>
                    </div>
                </div>
            </footer>

        </div>

    )
}

export default Footer