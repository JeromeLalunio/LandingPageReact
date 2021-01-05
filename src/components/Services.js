import web from '../assets/undraw_Code_review_re_woeb.svg';


export default function Services(){
    return (
        <div className="margin-tb p-5" style={{backgroundColor: "#f2f2f2"}} id="services">
            <div className="container" >
                <h1 className="display-5 fw-bold lh-lg">SERVICES OFFERED</h1>
                <p>
                Ex voluptate pariatur amet incididunt minim amet laboris consequat laboris mollit voluptate aliqua qui minim.
                </p>
                <div className="d-flex justify-content-evenly row">
                    <div className="card col-sm">
                        <img src={web} className="card-img-top" alt="service1" />
                        <div className="card-body">
                            <h5 className="card-title">WEB DEVELOPMENT</h5>
                            <p className="card-text">HTML, CSS, JavaScript, React</p>
                            <a href="#services" className="btn btn-primary">Inquire</a>
                        </div>
                    </div>
                    <div className="card col-sm">
                        <img src={web} className="card-img-top" alt="service2" />
                        <div className="card-body">
                            <h5 className="card-title">APP DEVELOPMENT</h5>
                            <p className="card-text">Flutter, React Native</p>
                            <a href="#services" className="btn btn-primary">Inquire</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}