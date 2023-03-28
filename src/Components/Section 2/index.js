import './index.css'
import imgSec2 from '../../Images/sec1.png'
function Section2() {
    return (
        <>
            <div className="section-two">
                <div className="container">
                    <div className="row justify-content-lg-between">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="inner-box">
                                <div className="inner-items">
                                    <div className="inner-img">
                                        <img src={imgSec2} alt="sec1"/>
                                    </div>
                                    <div className="inner-title">
                                        <p>Modern Strategy</p>
                                    </div>
                                    <div className="inner-desc">
                                        <p>Customize anything in this template to fit your website needs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="inner-box">
                                <div className="inner-items">
                                    <div className="inner-img">
                                        <img src={imgSec2} alt="sec1"/>
                                    </div>
                                    <div className="inner-title">
                                        <p>Best Relationship</p>
                                    </div>
                                    <div className="inner-desc">
                                        <p>Contact us immediately if you have a question in mind</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="inner-box">
                                <div className="inner-items">
                                    <div className="inner-img">
                                        <img src={imgSec2} alt="sec1"/>
                                    </div>
                                    <div className="inner-title">
                                        <p>Ultimate Marketing</p>
                                    </div>
                                    <div className="inner-desc">
                                        <p>You just need to tell your friends about our free templates</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section2;