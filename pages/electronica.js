import Layout from "../components/Layout";
import AddButton from "../components/AddButton";

const electronica = () => {
    return (
        <div>
            <Layout title="Electrónica" >
                <AddButton/>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-body bg-dark">
                            <h2>Con 10 años de experiencia en el sector de la electrónica</h2>
                            <p>Presupuestos sin compromiso en reparaciones de cualquier dispositivo electrónico tales como consolas, ordenadores, centralitas, equipos industriales , etc</p>
                            <img src='/electronica.JPG' alt='' />
                        </div>
                    </div>
                </div>

            </Layout>

        </div>
    )
}

export default electronica