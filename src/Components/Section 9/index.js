import './index.css'
import img1Sec9 from '../../Images/sec9-1.png'
import img2Sec9 from '../../Images/sec9-2.png'
import img3Sec9 from '../../Images/sec9-3.png'
function Section9() {
    return (
        <>
            <div className="section-nine">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-head text-center">
                                <h2>Blog Entries</h2>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <div className="inner-text text-center">
                                <p>
                                    Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet
                                    <br/>
                                        nulla vitae, placerat nibh. Cras maximus venenatis molestie.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="inner-img">
                                    <img src={img1Sec9} alt="sec9-1"/>
                                </div>
                                <div className="inner-content">
                                    <h3>
                                        <a href="/">
                                            Vivamus ac vehicula dui
                                        </a>
                                    </h3>
                                    <div className="inner-desc">
                                        Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.
                                    </div>
                                    <a href="/" className="button button-pink">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="inner-img">
                                    <img src={img2Sec9} alt="sec9-2"/>
                                </div>
                                <div className="inner-content">
                                    <h3>
                                        <a href="/">
                                            Phasellus convallis augue
                                        </a>
                                    </h3>
                                    <div className="inner-desc">
                                        Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.
                                    </div>
                                    <a href="/" className="button button-pink">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="inner-img">
                                    <img src={img3Sec9} alt="sec9-3"/>
                                </div>
                                <div className="inner-content">
                                    <h3>
                                        <a href="/">
                                            Nam gravida purus non
                                        </a>
                                    </h3>
                                    <div className="inner-desc">
                                        Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.
                                    </div>
                                    <a href="/" className="button button-pink">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section9;