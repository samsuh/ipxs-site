import Layout from '../components/Layout';

const Pin = () => (
    <Layout>
    <section className="my-5">
        <h1 className="h1-responsive font-weight-bold text-center my-5">IPXS Pinning Service Extends IPFS</h1>
        <h2 className="grey-text text-center mx-auto mb-5"> Scalable, Available and Fast!</h2>
        <div className="row">
        <div className="col-lg-5 text-center text-lg-left">
        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="mockup image" />
        </div>
        <div className="col-lg-7">
        <div className="row mb-3">
            <div className="col-1">
                <i className="material-icons mr-2 align-bottom">check</i>
            </div>
            <div className="col-xl-10 col-md-11 col-10">
            <h5 className="font-weight-bold mb-3">File Availability</h5>
            <p className="grey-text"><strong>99.99%</strong> availability for Production-grade applications (over a given year).</p>
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-1">
                <i className="material-icons mr-2 align-bottom">check</i>
            </div>
            <div className="col-xl-10 col-md-11 col-10">
            <h5 className="font-weight-bold mb-3">Eliminate Server Upkeep</h5>
            <p className="grey-text">Utilize your resources better by redirecting developer hours away from maintaining storage infrastructure; <strong>no required maintenance.</strong></p>
            </div>
        </div>
        <div className="row">
            <div className="col-1">
                <i className="material-icons mr-2 align-bottom">check</i>
            </div>
            <div className="col-xl-10 col-md-11 col-10">
            <h5 className="font-weight-bold mb-3">Speed</h5>
            <p className="grey-text">Data-heavy applications benefit from <strong>40ms response time</strong>.</p>
            </div>
        </div>
        </div>
    </div>
    </section>
    <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-3">Pin Price Plans</h2>
        <div className="row">
            <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
            <div className="pricing-card card">
                <div className="card-body">
                <h5 className="font-weight-bold mt-3">Free Tier</h5>
                <ul className="mb-1" style={{ listStyleType: "none" }}>
                <li><p><span style={{ fontSize: "32px" }}>$0</span></p></li>

                    <li>
                    <p><strong>1</strong> project</p>
                    </li>
                    <li>
                    <p><strong>3 GB</strong> storage</p>
                    </li>
                    <li>
                    <p><strong>15 GB</strong> bandwidth</p>
                    </li>
                    <li>
                    </li>
                </ul>
                <button type="button" className="btn btn-primary text-light btn-rounded mb-4 ml-4" data-toggle="modal" data-target="#myModal">Join Beta Waitlist</button>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
                <div className="card card-image">
                    <div className="pricing-card card">
                        <div className="card-body">
                        <h5 className="font-weight-bold mt-3">Pro</h5>
                        <ul className="mb-1" style={{ listStyleType: "none" }}>
                            <li><p><span style={{ fontSize: "32px" }}>$0.06</span>/GB/month</p></li>
                            <li>
                            <p><strong>5</strong> projects</p>
                            </li>
                            <li>
                            <p><strong>UNLIMITED</strong> storage</p>
                            </li>
                            <li>
                            <p><strong>200 GB</strong> bandwidth</p>
                            </li>
                            <li>
                            <p><strong>$0.04/GB</strong> bandwidth overage</p>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-info btn-rounded text-light mb-4 ml-4" data-toggle="modal" data-target="#myModal">Advanced Notice</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="pricing-card card">
                    <div className="card-body">
                    <h5 className="font-weight-bold mt-3">Custom</h5><br/>
                    <ul className="mb-1" style={{ listStyleType: "none" }}>
                        <li>
                        <p>IPFS & storage consultation</p>
                        </li>
                        <li>
                        <p>Reduce storage costs</p>
                        </li>
                        <li>
                        <p>Improve Availability</p>
                        </li>
                        <li>
                        <p>IPFS Private Network implementation</p>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-success btn-rounded text-light mb-4 ml-4" data-toggle="modal" data-target="#myModal">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

  
    </Layout>
);

export default Pin;