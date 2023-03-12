import Layout from "../components/Layout"
import { iotProfile } from "../profile"
import AddButton from "../components/AddButton";

const mobile = () => {
    return (
        <div>
            <Layout title="Desarollo de aplicaciones moviles" >
                <AddButton />

                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-body bg-dark">
                            <h2>Con un enfoque en la innovación y la creatividad, la empresa se destaca por su capacidad para crear soluciones móviles únicas y emocionantes.</h2>
                            <p>Con un equipo altamente capacitado y flexible, la startup ofrece servicios de desarrollo de aplicaciones móviles personalizadas, desde el diseño hasta la implementación y el mantenimiento posterior. Con una metodología de desarrollo ágil, la startup se asegura de que los proyectos se entreguen en plazos cortos y dentro del presupuesto del cliente.</p>
                            <img src="/mobile.JPG" alt="" className="card-img-top" />
                            <p>En resumen, la startup es una opción ideal para aquellos que buscan un enfoque innovador y flexible en el desarrollo de aplicaciones móviles. Con su capacidad para adaptarse rápidamente a las tendencias del mercado y su enfoque en la experiencia del usuario, la startup es una opción confiable y emocionante para cualquier proyecto de desarrollo de aplicaciones móviles.</p>
                        </div>
                    </div>
                </div>

            </Layout>

        </div>

    )
}

export default mobile