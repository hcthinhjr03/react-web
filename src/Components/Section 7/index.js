import './index.css'

function Section7() {
    return (
        <>
            <div className="section-seven">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-head text-center">
                                <h2>Pricing Plans</h2>
                                <p>
                                    Donec vulputate urna sed rutrum venenatis. Cras consequat magna
                                    <br/>
                                        quis arcu elementum, quis congue risus volutpat.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box text-center">
                                <p className="inner-title">Starter</p>
                                <div className="inner-price">
                                    <span className="unit">$</span>
                                    <span className="number">14.50</span>
                                    <span className="time">monthly</span>
                                </div>
                                <div className="inner-list">
                                    <ul>
                                        <li>60 GB space</li>
                                        <li>600 GB transfer</li>
                                        <li>Pro Design Panel</li>
                                        <li className="none">15-minute support</li>
                                        <li className="none">Unlimited Emails</li>
                                        <li className="none">24/7 Security</li>
                                    </ul>
                                </div>
                                <div className="inner-button">
                                    <a href="/" className="button button-purple">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box text-center">
                                <p className="inner-title">Premium</p>
                                <div className="inner-price active">
                                    <span className="unit">$</span>
                                    <span className="number">21.50</span>
                                    <span className="time">monthly</span>
                                </div>
                                <div className="inner-list">
                                    <ul>
                                        <li>120 GB space</li>
                                        <li>1200 GB transfer</li>
                                        <li>Pro Design Panel</li>
                                        <li>15-minute support</li>
                                        <li className="none">Unlimited Emails</li>
                                        <li className="none">24/7 Security</li>
                                    </ul>
                                </div>
                                <div className="inner-button">
                                    <a href="/" className="button button-purple">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box text-center">
                                <p className="inner-title">Advanced</p>
                                <div className="inner-price">
                                    <span className="unit">$</span>
                                    <span className="number">42.00</span>
                                    <span className="time">monthly</span>
                                </div>
                                <div className="inner-list">
                                    <ul>
                                        <li>250 GB space</li>
                                        <li>5000 GB transfer</li>
                                        <li>Pro Design Panel</li>
                                        <li>15-minute support</li>
                                        <li>Unlimited Emails</li>
                                        <li>24/7 Security</li>
                                    </ul>
                                </div>
                                <div className="inner-button">
                                    <a href="/" className="button button-purple">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section7;