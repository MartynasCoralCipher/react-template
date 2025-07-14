import { useNavigate } from 'react-router-dom';
import logo from '../../assets/react.svg'

export const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <header className="fixed top-0 z-50 shadow-sm w-full h-20 py-3 px-4 flex flex-row justify-between items-center bg-[#121212]">
        {/* React Logo */}
        <img 
          src={logo}
          alt="React Logo" 
          className="w-14 h-14 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleLogoClick}
        />
        {/* Navigation Menu */}
        <nav className="flex flex-row items-center space-x-2">
          <div 
            className="px-2 py-3 rounded-lg cursor-pointer hover:bg-[#D3D3D3] hover:text-black transition-colors text-white"
            onClick={() => handleMenuClick('/about')}
          >
            About
          </div>
          <div 
            className="px-2 py-3 rounded-lg cursor-pointer hover:bg-[#D3D3D3] hover:text-black transition-colors text-white"
            onClick={() => handleMenuClick('/faq')}
          >
            FAQ
          </div>
          <div 
            className="px-2 py-3 rounded-lg cursor-pointer hover:bg-[#D3D3D3] hover:text-black transition-colors text-white"
            onClick={() => handleMenuClick('/contact-us')}
          >
            Contact Us
          </div>
        </nav>
    </header>
  );
};