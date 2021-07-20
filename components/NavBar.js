import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import { useState} from 'react'

export default function NavBar() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Navbar expanded={isExpanded} className="justify-content-between" expand="lg" variant="dark" bg="dark">
            <Link href="/">
                <a className="navbar-brand">COVID-19 Tracker</a>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
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