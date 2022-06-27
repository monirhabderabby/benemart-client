import { Button, Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const BNavbar = () => {
    return (
        <div>
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button>Get started</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : "text-black"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/features"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : "text-black"
                        }
                    >
                        Features
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : "text-black"
                        }
                    >
                        Login
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default BNavbar;
