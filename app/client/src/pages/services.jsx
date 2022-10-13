import { Layout } from "../components/layout"
import { ServiceCard } from "../components/service-card";

const ServicesPage = () => {
    const serivces=['web design','web development','editing']
    return (
        <Layout>
            <div className="container">
                <div className="row p-5 m-5">
                    {serivces.map((serv) => (
                        <div key={serv} className="col-md-4">
                            <ServiceCard service={serv} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
export default ServicesPage;