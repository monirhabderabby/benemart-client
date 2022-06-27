import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
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
                    <Button>Login</Button>
                    {/* <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={
                            <Avatar
                                alt="User settings"
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded={true}
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown> */}
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-primary text-lg" : "text-black"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "text-primary text-lg" : "text-black text-lg"
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/features"
                        className={({ isActive }) =>
                            isActive ? "text-primary text-lg" : "text-black text-lg"
                        }
                    >
                        Features
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-primary text-lg" : "text-black text-lg"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "text-primary text-lg" : "text-black text-lg"
                        }
                    >
                        Contact
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default BNavbar;
