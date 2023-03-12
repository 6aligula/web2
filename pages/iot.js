import Layout from "../components/Layout"
import { iotProfile } from "../profile";
import AddButton from "../components/AddButton";

const iot = () => {
    return (
        <div>
            
            <Layout title="Internet de las cosas">
            <AddButton/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-body bg-dark">
                            <div className="row">

                                {
                                    iotProfile.map(({ image, name, description }, i) => (
                                        <div className="col-md-4 p-2" key={i}>
                                            <div className="card h-100">
                                                <div className="overflow">
                                                    <img src={`/${image}`} alt="" className="card-img-top" />

                                                </div>

                                                <div className="card-body">
                                                    <h3>{name}</h3>
                                                    <p>{description}</p>

                                                </div>
                                            </div>
                                        </div>


                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </Layout>

        </div>
    )
}

export default iot