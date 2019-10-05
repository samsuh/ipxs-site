import Layout from '../components/Layout';

const Index = () => (
    <div style={{backgroundImage: "url("+"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80" + ")", height: '100%'}}>
    <Layout>
    <div className="justify-content-center">
        <div className="row py-2 px-4">
            <div className="col-md-7 col-lg-8 text-center py-5 bg-transparent text-light">
                <div>
                    <h2 className="card-fluid card-title h1-responsive py-3 mb-5 font-bold"><strong>IPXS is Filecoin on Ethereum</strong></h2>
                    <h4 className="mx-5 mb-3">Upgraded IPFS with:</h4>
                    <p><i class="material-icons mr-2 align-bottom">check</i>Permissioned Files</p>
                    <p><i class="material-icons mr-2 align-bottom">check</i>Improved Speed</p>
                    <p><i class="material-icons mr-2 align-bottom">check</i>Improved Availability</p>
                    <p className="mb-5"><i class="material-icons mr-2 align-bottom">check</i> ERC20 Token Incentives</p>
                    <a className="btn btn-outline-dark btn-md btn-info text-light" href="../static/whitepaperTest.pdf"><i className="fas fa-clone left"></i> Read Whitepaper</a>
                </div>
            </div>
            <div className="col-md-5 col-lg-4 card-fluid card bg-light my-2" style={{opacity:.9}}>
                <div className="card-body">
                    <form>
                        <p className="h4 text-center py-4">Decentralize Now</p>
                        <div className="md-form ">
                            <input type="text" id="fullName" className="form-control"/>
                            <i class="material-icons mr-2 align-middle">account_box</i>
                            <label className="font-weight-light"> Your name</label>
                        </div>
                        <div className="md-form">
                            <input type="text" id="projectName" className="form-control"/>
                            <i class="material-icons mr-2 align-middle">business</i>
                            <label className="font-weight-light"> Project</label>
                        </div>
                        <div className="md-form">
                            <input type="email" id="materialFormCardEmailEx" className="form-control"/>
                            <i class="material-icons mr-2 align-middle">email</i>
                            <label className="font-weight-light"> Your email</label>
                        </div>
                        <div className="text-center pb-4 mt-3">
                            <button className="btn btn-primary" type="submit">Stay Updated</button>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email.</small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </Layout>
    </div>
);

export default Index;