import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"
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
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight} className="text-primary"/> <a href="" className='hover:text-primary'>Home</a></li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight} className="text-primary"/> <a href="" className='hover:text-primary'>About</a></li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight} className="text-primary"/> <a href="" className='hover:text-primary'>Poducts</a></li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight} className="text-primary"/> <a href="" className='hover:text-primary'>Terms of services</a></li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight} className="text-primary"/> <a href="" className='hover:text-primary'>Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4>Our Service</h4>
                            <ul className='text-gray-500'>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight} className="text-primary"/> <a href="" className='hover:text-primary'>Shoe</a></li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight} className="text-primary"/> <a href="" className='hover:text-primary'>Shirt</a></li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight} className="text-primary"/> <a href="" className='hover:text-primary'>Pant</a> </li>
                                <li className='pb-4'><FontAwesomeIcon icon={faChevronRight} className="text-primary"/> <a href="" className='hover:text-primary'>Ganji</a> </li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4>Join Our Newsletter</h4>
                            <p>Join 1m+ Products and never miss out leatest Fashion tips and more</p>
                            <form className='flex flex-row flex-wrap'>
                                <input type="text" name="" className='text-gray-500 w-2/3 p-2 focus:border-primary' placeholder='email@example.com'/>
                                <button className='p-2 w-1/3 bg-primary text-white hover:bg-yellow-600'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-gray-900 text-gray-500 px-10'>
                <div className='max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center'>
                    <div className='text-center'>
                        <div>
                            Copyright <strong><span>Company</span></strong>. All Rights Reserved
                        </div>
                    </div>
                    <div className='text-white text-center text-xl'>
                        <a href="" className='w-10 h-10 rounded-full bg-primary hover:bg-yellow-600 mx-1 inline-block pt-1'><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="" className='w-10 h-10 rounded-full bg-primary hover:bg-yellow-600 mx-1 inline-block pt-1'><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="" className='w-10 h-10 rounded-full bg-primary hover:bg-yellow-600 mx-1 inline-block pt-1'><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;