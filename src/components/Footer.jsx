import logo from "../assets/logo.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import twitterIcon from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Image */}
          <img src={logo} className="scale-50" alt="Clipboard Logo" />

          {/* Container for menus and social */}
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
            {/* Menus */}
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              {/* Menu 1 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="/#" className="hover:text-strongCyan">
                    FAQ
                  </a>
                </div>

                <div>
                  <a href="/" className="hover:text-strongCyan">
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="/" className="hover:text-strongCyan">
                    Privacy Policy
                  </a>
                </div>

                <div>
                  <a href="/" className="hover:text-strongCyan">
                    Press Kit
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="/" className="hover:text-strongCyan">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-between w-32 py-1">
              <a href="/">
                <img src={facebookIcon} className="duration-200 ficon" alt="" />
              </a>
              <a href="/">
                <img src={twitterIcon} className="duration-200 ficon" alt="" />
              </a>

              <a href="/">
                <img
                  src={instagramIcon}
                  className="duration-200 ficon"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
