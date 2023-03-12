import Layout from "../components/Layout";
import AddButton from "../components/AddButton";

const upgrade_systems = () => {
    return (
        <div>
            <Layout title="Actualización de sistemas" >

                <AddButton/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-body bg-dark">
                            <h2>Ofrecemos un servicio completo de diagnóstico y análisis para determinar cuáles son los componentes que necesitan ser actualizados para obtener el máximo rendimiento de su sistema. </h2>
                            <p>
                                En cuanto al hardware, nos encargamos de actualizar componentes como la memoria RAM, el disco duro o el procesador, lo que le permitirá trabajar más rápido y de manera más eficiente. 
                                En lo que respecta al software, ofrecemos una amplia gama de servicios que incluyen la actualización de sistemas operativos, controladores, aplicaciones y programas. </p>
                            <img src='/upgrade.JPG' alt='' />

                            <p>Podemos asegurarnos de que su equipo esté protegido contra virus y malware, y podemos instalar software especializado para satisfacer sus necesidades específicas.
                                Nuestro equipo de expertos altamente capacitados y experimentados está listo para ayudarlo a actualizar su ordenador y garantizar que esté funcionando al máximo de su capacidad. Además, ofrecemos precios competitivos y un servicio excepcional al cliente para garantizar su satisfacción total.</p>
                        </div>
                    </div>
                </div>

            </Layout>

        </div>
    )
}

export default upgrade_systems