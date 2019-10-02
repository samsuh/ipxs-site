import Layout from '../components/Layout';

const Index = () => (
    <Layout>
<div class="jumbotron card card-image bg-transparent">
  <div class="text-center py-5 px-4">
    <div>
      <h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>IPXS extends IPFS</strong></h2>
      <h3 class="mx-5 mb-5">Better Features, Speed and Scalability</h3>
      <p class="mx-5 mb-5"> Permissions using Access Controls, and blah for better speed and scalability</p>
      <a class="btn btn-outline-dark btn-md btn-primary text-light"><i class="fas fa-clone left"></i> Read Whitepaper</a>
    </div>
  </div>
</div>

        <section class="text-center my-5">
            <div class="row">
                <div class="col-md-4">
                <i class="fa fa-fingerprint fa-3x"></i>
                <h5 class="font-weight-bold my-4">File Permissions</h5>
                <p class="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                    maiores aperiam minima assumenda deleniti hic.
                </p>
                </div>
                <div class="col-md-4">
                <i class="fa fa-book fa-3x"></i>
                <h5 class="font-weight-bold my-4">Tutorials</h5>
                <p class="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                    maiores aperiam minima assumenda deleniti hic.
                </p>
                </div>
                <div class="col-md-4">
                <i class="fa fa-comments fa-3x"></i>
                <h5 class="font-weight-bold my-4">Support</h5>
                <p class="grey-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                    aperiam minima assumenda deleniti hic.
                </p>
                </div>
            </div>
        </section>
    </Layout>
);

export default Index;