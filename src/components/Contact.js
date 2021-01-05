
export default function Contact(){
    return (
        <div className="white-font p-5 bg-primary margin-tb" id="contact">
            <div className="container" >
                <h1 className="display-5 fw-bold lh-lg">CONTACT US</h1>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Your Email address:</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Your Message:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
                <div className="container border border-white p-3 d-flex flex-column justify-content-evenly">
                <h4>[email address here]</h4>
                <h4>[facebook page address here]</h4>
                <h4>[twitter page address here]</h4>
                <h4>[instagram page address here]</h4>
                </div>
            <br/><br/>

            
        </div>
    );
}