import './index.css'
import imgSec4 from '../../Images/sec4.png'

function Section4() {
    return (
        <>
            <div className="section-four">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-content">
                                <h2>We can help you to grow your business</h2>
                                <p>Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.</p>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-img text-center">
                                <img src={imgSec4} alt="sec-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section4;