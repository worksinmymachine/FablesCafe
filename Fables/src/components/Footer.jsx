import React from 'react'
import FooterImg from '../assets/Footer.jpg'
import FabLogo from '../assets/FabLogo1.png'
import Instagram from '../assets/instagram.png'

const bgImage = {
    backgroundImage: `url(${FooterImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "120px",
    width: "100%"
}

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900" style={bgImage}>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src={FabLogo} className="h-20 me-3" alt="Fables Logo" />
                            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fables Cafe</span> */}
                        </a>
                        <p className=''> Address- Floor-1, Unit- 105, Swaraj Capital, Borhadewadi, Moshi, Pune, Maharashtra 412105</p>
                        <p className=''> Ph no.- +91 7758071734</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-1">
                                    <a href="#" className="hover:underline">Home</a>
                                </li>
                                <li className="mb-1">
                                    <a href="#" className="hover:underline">Our Journey</a>
                                </li>
                                <li className="mb-1">
                                    <a href="#" className="hover:underline">About Us</a>
                                </li>
                                <li className="mb-1">
                                    <a href="#" className="hover:underline">Products & Services</a>
                                </li>
                                <li className="mb-1">
                                    <a href="#" className="hover:underline">Contact Us</a>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-2">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Facebook</a>
                                </li>
                                <li className='mb-2'>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Twitter</a>
                                </li>
                                <li className='mb-2'>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made with &#x2764;

                    </p>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/profile.php?id=100078383847726&mibextid=LQQJ4d" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>

                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="https://www.instagram.com/fables_cafe_?igsh=MTNjNzE0a2xxOGVkcg==" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <img src={Instagram} className='h-4'></img>
                            <span className="sr-only">Instagram account</span>
                        </a>

                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer