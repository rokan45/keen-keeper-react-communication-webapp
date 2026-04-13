import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#1a4336] text-white py-7 px-6 font-sans">

                {/* logo and text container */}
                <div className="mx-auto flex flex-col items-center text-center">

                    <h2 className="text-5xl font-bold mb-4 tracking-tight">KeenKeeper</h2>

                    <p className="text-sm text-gray-300 max-w-lg mb-8 leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>


                      {/* Social link container */}
                    <div className="mb-12">
                        <h3 className="text-[#88b5a8] font-semibold text-sm uppercase tracking-wider mb-4">Social Links</h3>
                        <div className="flex gap-4 justify-center">

                            <FaFacebook className='text-3xl'></FaFacebook>
                            <FaInstagram className='text-3xl'></FaInstagram>
                            <FaSquareXTwitter className='text-3xl'></FaSquareXTwitter>
                        </div>
                    </div>

                     {/* Copy right and security concern link */}
                    <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                        <p>© 2026 KeenKeeper. All rights reserved.</p>

                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    );
};

export default Footer;