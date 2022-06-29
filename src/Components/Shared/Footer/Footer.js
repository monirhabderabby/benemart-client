import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <footer>
            <div className='p-10 bg-gray-800 text-gray-200'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                        <div className='mb-5'>
                            <h4 className='text-2xl pb-4'>Company</h4>
                            <p className='text-gray-500'>
                            Banani, 123 Street <br />
                            Dhaka 1230<br />
                            Bangladesh <br /><br />
                            <strong>Phone: </strong> +880 1956306002 <br />
                            <strong>Email: </strong> benemart@gmail.com
                            </p>
                        </div>
                        <div className='mb-5'>
                            <h4>Usefull Links</h4>
                            <ul className='text-gray-500'>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight}/> <a href="" className='hover:text-primary'>Home</a></li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight}/> <a href="" className='hover:text-primary'>About</a></li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight}/> <a href="" className='hover:text-primary'>Poducts</a></li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight}/> <a href="" className='hover:text-primary'>Terms of services</a></li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight}/> <a href="" className='hover:text-primary'>Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4>Our Service</h4>
                            <ul className='text-gray-500'>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight} /> <a href="" className='hover:text-primary'>Shoe</a></li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight} /> <a href="" className='hover:text-primary'>Shirt</a></li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight} /> <a href="" className='hover:text-primary'>Pant</a> </li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight} /> <a href="" className='hover:text-primary'>Ganji</a> </li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4>Join Our Newsletter</h4>
                            <p>Join 1m+ Products and never miss out leatest Fashion tips and more</p>
                            <form>
                                <input type="text" name="" />
                                <button>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;