import coco from '../assets/Testimonials/coco.jpeg'
import joe from '../assets/Testimonials/joe.jpeg'
import jordan from '../assets/Testimonials/jordan.webp'
import star from '../assets/icons/star.png'


    const card = (name, image) => (
        <div className="card w-75 testimonial-card">
            <div className="d-flex align-items-center justify-content-center">
                <img className="testimonial-img" src={image} alt={name}/>
                <div>
                    <h5 className="card-title">{name}</h5>
                    <span>
                        <img className="star" src={star} alt="star"/>
                        <img className="star" src={star} alt="star"/>
                        <img className="star" src={star} alt="star"/>
                        <img className="star" src={star} alt="star"/>
                        <img className="star" src={star} alt="star"/>
                    </span>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text">"Enim sunt dolor occaecat irure sint ea enim laborum."</p>
            </div>
        </div>
    );


export default function Testimonials(){
    return (
        <div className="container margin-tb" id="testimonials">
            <h1 className="display-5 fw-bold lh-lg mt-5">TESTIMONIALS</h1>

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {card("Juan Dela Cruz", coco)}
                    </div>
                    <div className="carousel-item">
                        {card("Jordan Peterson", jordan)}
                    </div>
                    <div className="carousel-item">
                        {card("Joe Rogan", joe)}
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    );
}