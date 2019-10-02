import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
    <div>
        <Head>
            <title>IPXS Storage Protocol</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <script src="https://use.fontawesome.com/f028f373ec.js"></script>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
        <Footer/>
        
    </div>
);

export default Layout;