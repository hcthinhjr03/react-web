import './index.css'
import imgSec6 from '../../Images/sec6-1.png'
import avtSec6 from '../../Images/avt.jpg'
function Section6() {
    return (
        <>
            <div className="section-six">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content text-center">
                                <h2>What do they say?</h2>
                                <p>
                                    Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla,
                                    <br/>
                                        at accumsan elit eros a turpis. Ut sagittis lectus libero.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="inner-items">
                                    <div className="inner-img text-center">
                                        <img src={imgSec6} alt="sec6-1"/>
                                    </div>
                                    <div className="inner-desc">
                                        <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
                                    </div>
                                    <div className="inner-info">
                                        <div className="inner-avt">
                                            <img src={avtSec6} alt="avt"/>
                                        </div>
                                        <div className="inner-name">
                                            <h3>Catherine Soft</h3>
                                            <p>Managing Director</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="inner-items">
                                    <div className="inner-img text-center">
                                        <img src={imgSec6} alt="sec6-1"/>
                                    </div>
                                    <div className="inner-desc">
                                        <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                                    </div>
                                    <div className="inner-info">
                                        <div className="inner-avt">
                                            <img src={avtSec6} alt="avt"/>
                                        </div>
                                        <div className="inner-name">
                                            <h3>Kelvin Wood</h3>
                                            <p>Digital Marketer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="inner-items">
                                    <div className="inner-img text-center">
                                        <img src={imgSec6} alt="sec6-1"/>
                                    </div>
                                    <div className="inner-desc">
                                        <p>Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.</p>
                                    </div>
                                    <div className="inner-info">
                                        <div className="inner-avt">
                                            <img src={avtSec6} alt="avt"/>
                                        </div>
                                        <div className="inner-name">
                                            <h3>David Martin</h3>
                                            <p>Website Manager</p>
                                        </div>
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

export default Section6;