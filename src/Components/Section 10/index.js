import './index.css'

function Section10() {
    return (
        <>
            <div className="section-ten">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content text-center">
                                <h2 className="inner-title">Talk to us</h2>
                                <p className="inner-desc">
                                    Maecenas pellentesque ante faucibus lectus vulputate sollicitudin.
                                    <br/>
                                        Cras feugiat hendrerit semper.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="inner-left">
                                <h4>Keep in touch</h4>
                                <p>110-220 Quisque diam odio, maximus ac consectetur eu, 10260
                                    <br/>
                                        auctor non lorem</p>
                                <p>You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you.</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Full name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" type="email" placeholder="E-Mail Address"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea className="form-control" cols="30" rows="5" placeholder="Your Message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <a href="/" className="button button-purple">Send Message</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section10;