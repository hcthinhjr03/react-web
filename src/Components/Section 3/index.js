import './index.css'
import imgSec3 from '../../Images/sec3.png'
function Section3() {
    return (
        <>
            <div className="section-three">
                <div className="container">
                    <div className="inner-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12 col-sm-12">
                                <div className="inner-img text-center">
                                    <img src={imgSec3} alt="sec3"/>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-content">
                                    <h2>Let's discuss about you project</h2>
                                    <p>Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hr"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section3;