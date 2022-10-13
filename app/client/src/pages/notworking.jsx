const NotWorkingPage = () => {
    return (
        <div className="container" style={{ height: '100vh' }}>
            <div className="row align-items-center" style={{ height: '100vh' }}>
                <div className="col-md-8 offset-md-2 alert alert-primary text-center">
                    Sorry, the web application is only available during working hours (Monday to Friday,  from 9 to 17)
                </div>
            </div>
        </div>
    )
}

export default NotWorkingPage;