import Layout from '../components/Layout';
import Form from '../components/Form';

const Index = () => (
    <div style={{backgroundImage: "url("+"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80" + ")", height: '100%'}}>
    <Layout>
    <div className="justify-content-center">
        <div className="row py-2 px-4">
            <div className="col-md-7 col-lg-8 text-center py-5 bg-transparent text-light">
                <div>
                    <h2 className="card-fluid card-title h1-responsive py-3 mb-5 font-bold"><strong>IPXS is Filecoin on Ethereum</strong></h2>
                    <h4 className="mx-5 mb-3">Upgraded IPFS with:</h4>
                    <p><i className="material-icons mr-2 align-bottom">check</i>Permissioned Files</p>
                    <p><i className="material-icons mr-2 align-bottom">check</i>Improved Speed</p>
                    <p><i className="material-icons mr-2 align-bottom">check</i>Improved Availability</p>
                    <p className="mb-5"><i className="material-icons mr-2 align-bottom">check</i> ERC20 Token Incentives</p>
                    <a className="btn btn-outline-dark btn-md btn-info text-light" href="../static/IPXS_WP_v0_1.pdf"><i className="fas fa-clone left"></i> Read Whitepaper</a>
                </div>
            </div>
            <div className="col-md-5 col-lg-4 card-fluid card bg-light my-2" style={{opacity:.9}}>
                <Form/>
            </div>
        </div>
    </div>
    </Layout>
    </div>
);

export default Index;