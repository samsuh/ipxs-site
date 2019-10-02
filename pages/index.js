import Layout from '../components/Layout';

const Index = () => (
    <Layout>
<div className="jumbotron card card-image bg-transparent">
  <div className="text-center py-5 px-4">
    <div>
      <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>IPXS extends IPFS</strong></h2>
      <h3 className="mx-5 mb-5">Better Features, Speed and Scalability</h3>
      <p className="mx-5 mb-5"> Permissions using Access Controls, and blah for better speed and scalability</p>
      <a className="btn btn-outline-dark btn-md btn-primary text-light"><i className="fas fa-clone left"></i> Read Whitepaper</a>
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
                <h5 className="font-weight-bold my-4">Tutorials</h5>
                <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                    maiores aperiam minima assumenda deleniti hic.
                </p>
                </div>
                <div className="col-md-4">
                <i className="fa fa-comments fa-3x"></i>
                <h5 className="font-weight-bold my-4">Support</h5>
                <p className="grey-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                    aperiam minima assumenda deleniti hic.
                </p>
                </div>
            </div>
        </section>
    </Layout>
);

export default Index;