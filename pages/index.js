import Layout from "../components/Layout"
import { projects } from '../profile'
import { testUrl } from "../functions/functions"

const index = () => {
    return (

        <div>
            <Layout>

                {/* portfolio */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-body bg-dark">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="text-center text-light">Un buen software corre en un buen hardware</h1>
                                </div>
                                {
                                    projects.map(({ name, description, image, url }, i) => (
                                        <div className="col-md-4 p-2" key={i}>
                                            <div className="card h-100">
                                                <div className="overflow">
                                                    <a href={url}>
                                                        <img src={`/${image}`} alt="" className="card-img-top" />
                                                    </a>

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
            </Layout >

        </div >
    )
}
export default index