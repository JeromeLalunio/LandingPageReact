
import backgroundImage from '../assets/undraw_A_day_at_the_park_re_9kxj.svg'

export default function Welcome(){
    return (
    <div className="d-flex justify-content-end greeting-cont align-items-center " id="home">
      <img src={backgroundImage} className="background-img" alt="background" />
      <div className="mx-5 text-end hero-cont">
        <h1 className="display-4 fw-bolder">This is a Landing Page</h1>
        <h5 className="fw-lighter mb-5">And this is a subtitle</h5>
      </div>
    </div>
    );
}