import Link from 'next/link';

const Footer = () => (
    <footer class="page-footer font-small bg-light pt-4 static-bottom">
        <div class="container">    
            <div class="row">
            <div class="col-md-6 mb-4">
                Social Media Links go here
            </div>
            <div class="col-md-6 mb-4">
                <form class="input-group">
                <input type="text" class="form-control form-control-sm" placeholder="Your email"
                    aria-label="Enter email to Stay Updated" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-sm btn-primary my-0" type="button">Sign up</button>
                </div>
                </form>
            </div>
            </div>
        </div>

        <div class="footer-copyright text-center py-3 bg-dark text-light">© 2019 
            <a class="text-primary" href="https://www.ipxs.io"> IPXS</a>
        </div>
    </footer>
);

export default Footer;