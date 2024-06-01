import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E2C2C] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First column */}
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4" style={{ lineHeight: '1.2' }}>Have an idea? <br /> Tell us about it</h1>
            <button className="bg-orange-50 text-white mt-4 px-6 py-2 rounded-md hover:bg-orange-100">Contact Us</button>
          </div>
          
          {/* Second column */}
          <div className='flex flex-row gap-20 mt-10 md:mt-0 md:justify-center'>
            <div className="text-white">
              <h2 className="text-xl font-semibold mb-4">Company</h2>
              <ul className='text-gray-300'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Studio</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Method</a></li>
                <li><a href="#">Works</a></li>
              </ul>
            </div>
            <div className="text-white">
              <h2 className="text-xl font-semibold mb-4">Discover</h2>
              <ul className='text-gray-300'>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='border-b border-gray-500 pt-10'></div>
      <div className='flex flex-col md:flex-row mt-4 justify-between px-6 text-white'>
        
        <div className='text-white text-sm flex mt-4 flex-row md:justify-end gap-2'>
            <a href='#' className='md:hover:underline hover:text-gray-20'>X</a>
            <a href='#' className='md:hover:underline hover:text-gray-20'>INSTAGRA</a>
            <a href='#' className='md:hover:underline hover:text-gray-20'>FACEBOOK</a>
            <a href='#' className='md:hover:underline hover:text-gray-20'>LINKEDIN</a>
        </div>
        
        <div className="md:text-center text-xs mt-4">
            <p className='text-slate-400'>
                Copyright © 2024 Landing Studio. All rights reserved.
            </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
