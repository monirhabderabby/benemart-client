import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const BNavbar = () => {
    return (
        <div>
            <Navbar fluid={true} rounded={true} className="bg-secondary">
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
                    <Link to="/login" className="bg-primary px-2 py-1 rounded-md text-white"><FontAwesomeIcon icon={faRightToBracket} className="w-3"/> Login</Link>
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
                            isActive ? " text-md text-primary my-auto font-normal" : "text-black my-auto hover:text-primary font-normal"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "text-primary text-md my-auto font-normal" : "text-black text-md my-auto hover:text-primary font-normal"
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/features"
                        className={({ isActive }) =>
                            isActive ? "text-primary text-md my-auto font-normal" : "text-black text-md my-auto hover:text-primary font-normal"
                        }
                    >
                        Features
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-primary text-md my-auto font-normal" : "text-black text-md my-auto hover:text-primary font-normal"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "text-primary text-md my-auto font-normal" : "text-black text-md my-auto hover:text-primary font-normal"
                        }
                    >
                        Contact
                    </NavLink>
                    <div className="h-full my-auto mx-auto">
                        <SearchBar />
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default BNavbar;
