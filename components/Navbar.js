import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a className="navbar-brand" href="/">IPXS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav ml-auto pr-4">
            <li className="nav-item active">
                <a className="nav-link" href="/"><i className="material-icons">home</i><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/pin">Pin</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/roadmap">Roadmap</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="../static/whitepaperTest.pdf">Whitepaper</a>
            </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;