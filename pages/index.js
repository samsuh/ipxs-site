import Layout from '../components/Layout';

const Index = () => (
    <Layout>
        <div class="jumbotron bg-transparent">
            <h1 class="display-3">Welcome to IPXS</h1>
            <p class="lead">IPXS extends IPFS with <b>additional features</b> and improved <b>speed</b> and <b>scalability</b>.</p>
            <hr class="my-4" />
            <p>It enables Permissioning of data using Access Controls, and blah for better speed and scalability. </p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Whitepaper</a>
            </p>
        </div>
        <section class="text-center my-5">
            <div class="row">
                <div class="col-md-4">
                <i class="fas fa-fingerprint fa-3x red-text"></i>
                <h5 class="font-weight-bold my-4">File Permissions</h5>
                <p class="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                    maiores aperiam minima assumenda deleniti hic.
                </p>
                </div>
                <div class="col-md-4">
                <i class="fas fa-book fa-3x cyan-text"></i>
                <h5 class="font-weight-bold my-4">Tutorials</h5>
                <p class="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                    maiores aperiam minima assumenda deleniti hic.
                </p>
                </div>
                <div class="col-md-4">
                <i class="far fa-comments fa-3x orange-text"></i>
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