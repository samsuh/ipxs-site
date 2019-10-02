import Layout from '../components/Layout';

const Pin = () => (
    <Layout>
    <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">IPXS Pinning Service</h2>
        <p className="lead grey-text text-center w-responsive mx-auto mb-5"> Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
        <div className="row">
        <div className="col-lg-5 text-center text-lg-left">
        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image" />
        </div>
        <div className="col-lg-7">
        <div className="row mb-3">
            <div className="col-1">
            <i className="fas fa-share fa-lg indigo-text"></i>
            </div>
            <div className="col-xl-10 col-md-11 col-10">
            <h5 className="font-weight-bold mb-3">File Availability</h5>
            <p className="grey-text">Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-1">
            <i className="fas fa-share fa-lg indigo-text"></i>
            </div>
            <div className="col-xl-10 col-md-11 col-10">
            <h5 className="font-weight-bold mb-3">Easy Maintenance</h5>
            <p className="grey-text">Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-1">
            <i className="fas fa-share fa-lg indigo-text"></i>
            </div>
            <div className="col-xl-10 col-md-11 col-10">
            <h5 className="font-weight-bold mb-3">Reduce Costs by 80%</h5>
            <p className="grey-text">Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
            </div>
        </div>
        </div>
    </div>
    </section>
    <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
        <p className="text-center w-responsive mx-auto mb-5">Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
        <div className="row">
            <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
            <div className="pricing-card card">
                <div className="card-body">
                <h5 className="font-weight-bold mt-3">Free Tier</h5>
                <div className="price pt-0">
                    <h2 className="number red-text mb-0">$0</h2>
                </div>
                <ul className="striped mb-1">
                    <li>
                    <p><strong>1</strong> project</p>
                    </li>
                    <li>
                    <p><strong>100</strong> components</p>
                    </li>
                    <li>
                    <p><strong>150</strong> features</p>
                    </li>
                    <li>
                    <p><strong>200</strong> members</p>
                    </li>
                </ul>
                <button type="button" className="btn btn-primary text-light btn-rounded mb-4" data-toggle="modal" data-target="#myModal">Join Beta Waitlist</button>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
                <div className="card card-image">
                    <div className="pricing-card card">
                        <div className="card-body">
                        <h5 className="font-weight-bold mt-3">Pro</h5>
                        <div className="price pt-0">
                            <h2 className="number red-text mb-0">$0.05</h2>
                        </div>
                        <ul className="striped mb-1">
                            <li>
                            <p><strong>1</strong> projects</p>
                            </li>
                            <li>
                            <p><strong>200</strong> components</p>
                            </li>
                            <li>
                            <p><strong>200</strong> features</p>
                            </li>
                            <li>
                            <p><strong>300</strong> members</p>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-info btn-rounded text-light mb-4" data-toggle="modal" data-target="#myModal">Advanced Notice</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="pricing-card card">
                    <div className="card-body">
                    <h5 className="font-weight-bold mt-3">Enterprise</h5>
                    <div className="price pt-0">
                        <h2 className="number red-text mb-0">30</h2>
                    </div>
                    <ul className="striped mb-1">
                        <li>
                        <p><strong>5</strong> projects</p>
                        </li>
                        <li>
                        <p><strong>300</strong> components</p>
                        </li>
                        <li>
                        <p><strong>350</strong> features</p>
                        </li>
                        <li>
                        <p><strong>400</strong> members</p>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-success btn-rounded text-light mb-4" data-toggle="modal" data-target="#myModal">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

  
    </Layout>
);

export default Pin;