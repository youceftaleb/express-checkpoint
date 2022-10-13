import { Layout } from "../components/layout"

const ContactPage = () => {
    return (
        <Layout>
            <form action="/" className="col-md-8 offset-md-2 mt-5">
                <h1 className="text-center">Contact us</h1>
                <div>
                    <label className="form-label">Full name :</label>
                    <input className="form-control" type="text" />
                </div>
                <div>
                    <label className="form-label">Email :</label>
                    <input className="form-control" type="email" />
                </div>
                <div>
                    <label className="form-label">Message</label>
                    <textarea className="form-control"/>
                </div>
                <button type="submit" className="btn btn-info">send</button>
            </form>
        </Layout>
    )
}
export default ContactPage;