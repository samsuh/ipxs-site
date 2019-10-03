import Layout from '../components/Layout';

const Index = () => (
    <Layout>
    <div className="justify-content-center">
        <div className="row py-2 px-4" style={{backgroundImage: "url("+"../static/images/forest.jpg" + ")"}}>
            <div className="col-md-7 col-lg-9 text-center py-5 bg-transparent">
                <div>
                    <h2 className="card-fluid card-title h1-responsive py-3 mb-5 font-bold"><strong>Is Your Dapp Still Using AWS?</strong></h2>
                    <h4 className="mx-5 mb-5">Decentralized Storage. Less Effort.</h4>
                    <p className="mx-5 mb-5"> Permissions using Access Controls, and blah for better speed and scalability</p>
                    <a className="btn btn-outline-dark btn-md btn-info text-light"><i className="fas fa-clone left"></i> Read Whitepaper</a>
                </div>
            </div>
            <div className="col-md-5 col-lg-3 card-fluid card my-2">
                <div className="card-body">
                    <form>
                        <p className="h4 text-center py-4">Decentralize Now</p>
                        <div className="md-form">
                            <i className="fa fa-user prefix grey-text"></i>
                            <input type="text" id="fullName" className="form-control"/>
                            <label for="fullName" className="font-weight-light">Your name</label>
                        </div>
                        <div className="md-form">
                            <i className="fa fa-user prefix grey-text"></i>
                            <input type="text" id="companyName" className="form-control"/>
                            <label for="companyName" className="font-weight-light">Company</label>
                        </div>
                        <div className="md-form">
                            <i className="fa fa-user prefix grey-text"></i>
                            <input type="text" id="companyRole" className="form-control"/>
                            <label for="companyRole" className="font-weight-light">Role at Company</label>
                        </div>
                        <div className="md-form">
                            <i className="fa fa-envelope prefix grey-text"></i>
                            <input type="email" id="materialFormCardEmailEx" className="form-control"/>
                            <label for="materialFormCardEmailEx" className="font-weight-light">Your email</label>
                        </div>
                        <div className="text-center py-4 mt-3">
                            <button className="btn btn-primary" type="submit">Contact Specialist</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

        <section className="text-center my-5">
            <div className="row">
                <div className="col-md-4">
                <i className="fa fa-fingerprint fa-3x"></i>
                <h5 className="font-weight-bold my-4">File Permissions</h5>
                <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                    maiores aperiam minima assumenda deleniti hic.
                </p>
                </div>
                <div className="col-md-4">
                <i className="fa fa-book fa-3x"></i>
                <h5 className="font-weight-bold my-4">Decentalize Easily</h5>
                <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                    maiores aperiam minima assumenda deleniti hic.
                </p>
                </div>
                <div className="col-md-4">
                <i className="fa fa-comments fa-3x"></i>
                <h5 className="font-weight-bold my-4">Expert Support</h5>
                <p className="grey-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                    aperiam minima assumenda deleniti hic.
                </p>
                </div>
            </div>
        </section>
    </Layout>
);

export default Index;