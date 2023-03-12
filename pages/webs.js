import Layout from "../components/Layout"
import { web } from "../profile"
import { testUrl } from "../functions/functions"
import AddButton from "../components/AddButton";

const webs = () => {
    return (
        <div>
            <Layout title="Diseño de Webs" >
                <AddButton/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-body bg-dark">
                            <div className="row">

                                {
                                    web.map(({ name, description, image, url }, i) => (
                                        <div className="col-md-4 p-2" key={i}>
                                            <div className="card h-100">
                                                <div className="overflow">
                                                    <img src={`/${image}`} alt="" className="card-img-top" />
                                                </div>

                                                <div className="card-body">
                                                    <h3>{name}</h3>
                                                    <p>{description}</p>
                                                    <a href={url} target="_blank">{testUrl(url)}</a>
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

export default webs