import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { close, menu, logo } from "../assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="w-full flex justify-center bg-white fixed z-50">
      <div className="w-full max-w-md bg-gradient-to-b from-[#11101d] to-[#11101d]">
        <header className="mt-200 px-4 py-4 flex justify-between items-center border-b border-gray-200">
          <Link to="/">
            <img src={logo} alt="referme" />
          </Link>
          <button
            onClick={() => setToggle(!toggle)}
            className="p-2 hover:bg-orange-50 rounded-full transition-all"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-6 h-6"
            />
          </button>
        </header>

        <div className={`${toggle ? 'flex' : 'hidden'} fixed w-full max-w-md h-screen bg-gradient-to-b from-[#FFEEE9] to-[#FFC7AD] z-50`}>
          <nav className="w-full px-8 py-10">
            <ul className="space-y-6">
              <li className="text-center">
                <a href="#home" className="text-[18px] font-medium text-gray-800 hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li className="text-center">
                <a href="#produk" className="text-[18px] font-medium text-gray-800 hover:text-orange-500 transition-colors">
                  Produk
                </a>
              </li>
              <li className="text-center">
                <a href="#kategori" className="text-[18px] font-medium text-gray-800 hover:text-orange-500 transition-colors">
                  Kategori
                </a>
              </li>
              <li className="text-center">
                <a href="#afiliator" className="text-[18px] font-medium text-gray-800 hover:text-orange-500 transition-colors">
                  Afiliator
                </a>
              </li>

              <div className="pt-8 space-y-4">
                <button
                  onClick={handleLogin}
                  className="w-full bg-[#FF5C35] text-white py-3 rounded-full hover:bg-[#ff4a1a] transition-all text-[16px] font-medium"
                >
                  Login
                </button>
                <button
                  onClick={handleRegister}
                  className="w-full border-2 border-[#FF5C35] text-[#FF5C35] py-3 rounded-full hover:bg-[#FF5C35] hover:text-white transition-all text-[16px] font-medium"
                >
                  Register
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

