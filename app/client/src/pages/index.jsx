import { Layout } from "../components/layout"

const HomePage = () => {
    return (
        <Layout>
            <div classname="container" style={{ height: '80vh', backgroundImage: 'linear-gradient(to right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)' }}>
                <div className="row text-white">
                    <div className="col-md-6 p-5">
                        <h1 className="pt-5">Welcome to our website</h1>
                        <p>Eu amet reprehenderit voluptate sit veniam.</p>
                        <button className="btn btn-info text">learn more</button>
                    </div>
                    <div className="col-md-6 text-white" style={{fontSize:250}}>
                        Logo
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default HomePage;