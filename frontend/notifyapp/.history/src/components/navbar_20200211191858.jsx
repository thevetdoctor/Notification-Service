import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import "../bootstrap.min.css"

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            color:"",
        }
    }
    componentDidMount() {
        window.onscroll = function () {
            if (window.pageYOffset < 99) {
                this.setState({ color: "light" });
            } else {

                this.setState({ color: "info" });
            }
        }.bind(this);
    }

    componentWillUnmount() {
        window.onscroll = null;
    }
    render() {
        return (
            <>
                <Navbar fixed="top" color={this.state.color} dark expand="md">
                    <NavbarBrand href="/" className="text-dark">Notify App</NavbarBrand>
                    <NavbarToggler style={{ border: "none" }} onClick={
                        () => {

                            this.setState({ isOpen: !this.state.isOpen })
                        }
                    } />
                    <Collapse className="justify-content-end" isOpen={this.state.isOpen} navbar>
                        <Nav navbar className="justify-content-center px-5">
                            <NavItem>
                                <NavLink className="text-dark" href="/home/sample"
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById("sample")
                                            .scrollIntoView({behavior:'smooth'});
                                    }}>Sample</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-dark" href="/home/price"
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById("price")
                                            .scrollIntoView({behavior:'smooth'});
                                    }}>Prices</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-dark" href="#"
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById("price")
                                            .scrollIntoView({behavior:'smooth'});
                                    }}>Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-dark" href="/home/contact-us"
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById("contact")
                                            .scrollIntoView({behavior:'smooth'});
                                    }}>Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        );
    }
}