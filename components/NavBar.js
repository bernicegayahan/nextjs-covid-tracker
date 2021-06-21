import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Link href="/">
                <a className="navbar-brand">COVID-19 Tracker</a>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/covid/top">
                        <a className="nav-link" role="button">Top Countries</a>
                    </Link>
                    <Link href="/covid/search">
                        <a className="nav-link" role="button">Find a Country</a>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}