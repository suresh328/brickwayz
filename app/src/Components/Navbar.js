import { useEffect , useState } from "react";
import applogo from "./../Assets/app_logo.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -60; // adjust based on your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMenuOpen(true);
  };


  return (
    <div className="main_container">
      <nav className="navbar">
        <div className="app_logo">
          <img src={applogo} alt="App Logo" />
        </div>

        {/* Hamburger Menu Button */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation(); // Prevents menu from closing immediately
            setMenuOpen(!menuOpen);
          }}
        >
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? "nav_linksopen" : "nav_links"}>
          <li onClick={() => handleScroll("Home")}>Home</li>
          <li onClick={() => handleScroll("About")}>About</li>
          <li onClick={() => handleScroll("OurPrograms")}>Our Programs</li>
          <li onClick={() => handleScroll("Testimonials")}>Testimonials</li>
          <li onClick={() => handleScroll("Blog")}>Blog</li>
          <li onClick={() => handleScroll("Contact")}>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
