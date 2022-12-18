import Layout from "../components/Layout"
import Error from './_error'

const github = ({ user, statusCode }) => {
    //console.log(user);
    if (statusCode) {
        return (
            <>
                <Error />
                <p className="text-center">Error {statusCode}</p>
            </>
        )

    }
    return (
        <Layout footer={false} title="Github" >
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt="" />
                        <p>{user.bio}</p>
                        <a href={user.html_url} target="_blank" className="btn btn-outline-secondary">Mi repositorio</a>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/6aligula');
    const data = await res.json();
    //console.log(data);
    /*control de errores desde el servidor*/
    console.log(res.status);
    const statusCode = res.status > 200 ? res.status : false;

    return {
        props: {
            user: data,
            statusCode: statusCode,
        }
    }
}

export default github