import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../pages/parts/navbar.js";

const Header = () => {
  const location = useLocation();
  const [hideOnHero, setHideOnHero] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setHideOnHero(false);
      return;
    }
    const handleScroll = () => {
      setHideOnHero(window.scrollY < 80);
    };
    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isHidden = location.pathname === "/" && hideOnHero;
  if (isHidden) return null;

  return (
    <div>
      <Nav />
      <div style={{ minHeight: 64 }} />
    </div>
  );
};

export default Header;