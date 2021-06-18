import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Link href="/">
                <a className="navbar-brand">Covid-19 Tracker</a>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/covid/search">
                        <a className="nav-link" role="button">Find a Country</a>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}