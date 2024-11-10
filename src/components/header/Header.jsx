import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css"; // تأكد من استيراد ملف CSS بشكل صحيح

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = () => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" }; // عكس حالة القائمة
    }
    return { right: "0" }; // اعرض القائمة عند الشاشات الأكبر
  };

  const handleOutsideClick = () => {
    setMenuOpened(false);
  };

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev); // عكس حالة القائمة عند الضغط على أيقونة القائمة
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="/logo.png" alt="logo" width={100} />

        <OutsideClickHandler onOutsideClick={handleOutsideClick}>
          <div className="flexCenter h-menu" style={getMenuStyles()}>
            <a href="#residencies" onClick={handleOutsideClick}>
              Residencies
            </a>
            <a href="#our-value" onClick={handleOutsideClick}>
              Our Value
            </a>
            <a href="#contact-us" onClick={handleOutsideClick}>
              Contact Us
            </a>
            <a href="#get-started" onClick={handleOutsideClick}>
              Get Started
            </a>
            <button className="button" onClick={handleOutsideClick}>
              {/* هنا استبدلت الرابط بـ button مباشرة */}
              <span>Contact</span>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
