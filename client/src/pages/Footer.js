import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container z-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white">CompressioX</h2>
                    <p className="mt-4 px-5 md:px-0 text-sm md:text-lg">
                        Your one-stop solution for image compression, text conversion, and QR code generation. Simplify your tasks with ease.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold text-white">
                        Quick Links
                    </h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <Link to="/image-compressor" className="hover:text-blue-500">
                                Image Compressor
                            </Link>
                        </li>
                        <li>
                            <Link to="/text-convertor" className="hover:text-blue-500">
                                Text Converter
                            </Link>
                        </li>
                        <li>
                            <Link to="/qr-code-generator" className="hover:text-blue-500">
                                QR Code Generator
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="text-center md:text-right">
                    <h3 className="text-xl font-semibold text-white">Follow Us On</h3>
                    <div className="mt-4 flex justify-center md:justify-end space-x-4">
                        <a href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500"
                        >
                            <FaFacebook size={30} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-400"
                        >
                            <FaInstagram size={30} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black"
                        >
                            <FaXTwitter size={30} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">Made with <span className="text-red-500 animate-pulse">
                        ♥
                    </span> By:
                <a href="https://nitinambegave.netlify.app/" className="hover:text-blue-500"> Team SoloCoder</a>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center text-sm text-gray-400">
                <p className="mt-2">
                    © {new Date().getFullYear()} CompressioX. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;