import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
    <div>
        <Head>
            <title>IPXS Storage Protocol</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            <script src="https://kit.fontawesome.com/fa25a79c49.js" crossorigin="anonymous"></script>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
        <div className="modal fade" id="myModal" role="dialog">
  <div className="modal-dialog  modal-dialog-centered " role="document">
            <div className="modal-content" style={{
  backgroundImage: "url("+"https://images.unsplash.com/photo-1456428746267-a1756408f782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"+ ")"}}>
                <button type="button" className="close text-light text-right" data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="modal-body">
                    <form className="px-sm-4 py-sm-4 text-light text-center">
                        <h4>Be Notified When </h4><h4>IPXS Beta Goes Live!</h4>
                        <div className="form-group">
                            <label for="subscribeName">Name</label>
                            <input type="text" className="form-control" id="subscribeName" aria-describedby="textHelp" placeholder="Full Name"/>
                        </div>

                        <div className="form-group">
                            <label for="subscribeEmail">Email address</label>
                            <input type="email" className="form-control" id="subscribeEmail" aria-describedby="emailHelp" placeholder="Email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <button type="submit" className="btn btn-danger btn-cta btn-block" data-dismiss="modal" aria-label="Close">Subscribe</button>
                    </form>
                </div>


            </div>
        </div>
    </div>
        <Footer/>
        
    </div>
);

export default Layout;