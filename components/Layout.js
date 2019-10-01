import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
    <div>
        <Head>
            <title>IPXS Storage Protocol</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css"/>
            <script src="https://kit.fontawesome.com/fa25a79c49.js" crossorigin="anonymous"/>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
        <Footer/>
        
    </div>
);

export default Layout;