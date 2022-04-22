import React from "react";
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Button
} from "react-bootstrap";

import TopBar from "./../components/navbar/Nav_Header";
import TopBar2 from "./Drawer";
import logo from "../assets/logo (8).png";



export default function NavBar () {
    return (
        <>
        {/* <TopBar /> */}
        <TopBar />
        <Navbar collapseOnSelect 
            expand="lg"
            className="font-sm"
            bg="dark" variant="dark" 
            // style={{marginTop: '4rem'}}
            >
        <Container>
        {/* <Navbar.Brand href="#home">
            Logo
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <small><Nav.Link href="/">HOME</Nav.Link></small>
            <small>
            <NavDropdown title="ABOUT US" 
             id="collasible-nav-dropdown">
                <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/ceo">CEO</NavDropdown.Item>
                <NavDropdown.Item href="/company_overview">Company Overview</NavDropdown.Item>
                <NavDropdown.Item href="/vision_mission">Vision and Mission</NavDropdown.Item>
                <NavDropdown.Item href="/board_directors">Board of Directors</NavDropdown.Item>
                <NavDropdown.Item href="/key_managerial">Key Managerial Personnel</NavDropdown.Item>
                <NavDropdown.Item href="/business_partner">Business Partners</NavDropdown.Item>
                
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            </small>
            <small>
            <Nav.Link href="/categories">PRODCUTS</Nav.Link>
            </small>
            <small>
            <NavDropdown title="INVESTORS" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Announcements</NavDropdown.Item>
                <NavDropdown.Item href="#">Right Issue</NavDropdown.Item>
                <NavDropdown.Item href="#">Notices of record date & BM</NavDropdown.Item>
                <NavDropdown.Item href="#">Financials</NavDropdown.Item>
                <NavDropdown.Item href="#">Corporate Governance</NavDropdown.Item>
                <NavDropdown.Item href="#">Share Holding Patterns</NavDropdown.Item>
                <NavDropdown.Item href="#a">Annual Report</NavDropdown.Item>
                <NavDropdown.Item href="#">Contact Information</NavDropdown.Item>
                
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            </small>
            <small>
            <Nav.Link href="/electric_vehicles">ELECTRIC VEHICLES</Nav.Link>
            </small>
            <small><Nav.Link href="/solar_projects">PROJECTS</Nav.Link></small>
            <small><Nav.Link href="/contact">CONTACT US</Nav.Link></small>
            <small><Nav.Link href="/gallery">GALLERY</Nav.Link></small>
            
            </Nav>
            
            <Nav>
            <div class="btn-group btn-group-sm " role="group" aria-label="...">
                <Nav.Link href="/firstcall">
                    <Button variant="light" className="btn rounded">RIGHT ISSUE FIRST CALL</Button>
                </Nav.Link>
                <Nav.Link href="/secondcall">
                    <Button variant="light" className="rounded">SECOND ISSUE AND FINAL CALL</Button>
                </Nav.Link>
                <Nav.Link href="/franchisee">
                    <Button variant="light" className="rounded">FRANCHISEE</Button>
                </Nav.Link>
            </div>
            {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}