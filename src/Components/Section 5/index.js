import './index.css'
import iconSec5 from '../../Images/iconsec5.png'
function Section5() {
    return (
        <>
            <div className="section-five">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="box-head box-head-white">
                                <h2 className="inner-title">
                                    Work Process
                                </h2>
                                <p className="inner-desc">
                                    Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex.
                                    Donec ante diam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="inner-box">
                                <img src={iconSec5} alt="icon"/>
                                <h3 className="inner-title">
                                    Get Ideas
                                </h3>
                                <div className="inner-desc">
                                    Godard pabst prism fam cliche.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="inner-box">
                                <img src={iconSec5} alt="icon"/>
                                <h3 className="inner-title">
                                    Sketch Up
                                </h3>
                                <div className="inner-desc">
                                    Godard pabst prism fam cliche.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="inner-box">
                                <img src={iconSec5} alt="icon" />
                                <h3 className="inner-title">
                                    Discuss
                                </h3>
                                <div className="inner-desc">
                                    Godard pabst prism fam cliche.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="inner-box">
                                <img src={iconSec5} alt="icon" />
                                <h3 className="inner-title">
                                    Revise
                                </h3>
                                <div className="inner-desc">
                                    Godard pabst prism fam cliche.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="inner-box">
                                <img src={iconSec5} alt="icon"/>
                                <h3 className="inner-title">
                                    Approve
                                </h3>
                                <div className="inner-desc">
                                    Godard pabst prism fam cliche.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="inner-box">
                                <img src={iconSec5} alt="icon"/>
                                <h3 className="inner-title">
                                    Launch
                                </h3>
                                <div className="inner-desc">
                                    Godard pabst prism fam cliche.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section5;