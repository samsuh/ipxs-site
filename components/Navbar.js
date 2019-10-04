import Link from 'next/link';

const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href="/">IPXS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/"> <i class="fas fa-home"></i> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/pin">Pin</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../static/whitepaperTest.pdf">Whitepaper</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/roadmap">Roadmap</a>
            </li>
            </ul>
                <button class="btn btn-danger my-2 my-sm-0" type="button" data-toggle="modal" data-target="#myModal">Join Beta Waitlist</button>
        </div>
    </nav>
);

export default Navbar;