import logo from '../../assets/images/logo.svg';
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export const Footer = () => {
    return (
        <>
            <footer className="py-20">
                <div className="container mx-auto">
                    <div className="text-center">
                        <div className="text-center mx-auto mb-8">
                            <img src={logo} alt="logo" className="text-center mx-auto"/>
                        </div>
                        <div className="mb-8">
                            <div className="mb-6 text-sm font-medium text-gray-500">
                                <a className="mx-6" href='/'>
                                    About
                                </a>
                                <a className="mx-6" href='/'>
                                    Features
                                </a>
                                <a className="mx-6" href='/'>
                                    Blog
                                </a>
                                <a className="mx-6" href='/'>
                                    Resources
                                </a>
                                <a className="mx-6" href='/'>
                                    Partners
                                </a>
                                <a className="mx-6" href='/'>
                                    Help
                                </a>
                                <a className="mx-6" href='/'>
                                    Terms
                                </a>
                            </div>
                            <div className="flex justify-center space-x-6 text-xl text-gray-500">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                                    <AiFillTikTok />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                        <div className="text-sm font-medium text-gray-500">© 2024 NMHx. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        </>
    )
}
