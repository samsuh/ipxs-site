import Link from 'next/link';

const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href="#">IPXS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/pin">Pin</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/wp">Whitepaper</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/roadmap">Roadmap</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="email to stay updated" />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Stay Updated</button>
            </form>
        </div>
    </nav>
);

export default Navbar;