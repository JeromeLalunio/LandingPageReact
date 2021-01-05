import product1 from '../assets/undraw_audio_player_re_cl20.svg'

export default function Products(){
    return (
        <div className="margin-tb p-5" style={{backgroundColor: "#f2f2f2"}} id="products">
            <div className="container" >
                <h1 className="display-5 fw-bold lh-lg">PRODUCTS</h1>
                <p>
                Ex voluptate pariatur amet incididunt minim amet laboris consequat laboris mollit voluptate aliqua qui minim.
                </p>
                <div className="d-flex justify-content-evenly row">
                    <div className="card col-sm">
                        <img src={product1}  className="card-img-top" alt="product1" />
                        <div className="card-body">
                            <h5 className="card-title">product1</h5>
                            <p className="card-text">Cupidatat ad fugiat aute proident ad excepteur..</p>
                            <a href="#products" className="btn btn-primary">More Details</a>
                        </div>
                    </div>
                    <div className="card col-sm">
                        <img src={product1}  className="card-img-top" alt="service2" />
                        <div className="card-body">
                            <h5 className="card-title">service2</h5>
                            <p className="card-text">Cupidatat ad fugiat aute proident ad excepteur.</p>
                            <a href="#products" className="btn btn-primary">More Details</a>
                        </div>
                    </div>
                    <div className="card col-sm">
                        <img src={product1} className="card-img-top" alt="service3" />
                        <div className="card-body">
                            <h5 className="card-title">Service3</h5>
                            <p className="card-text">Cupidatat ad fugiat aute proident ad excepteur.</p>
                            <a href="#products" className="btn btn-primary">More Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}