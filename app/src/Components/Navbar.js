import { useEffect , useState } from "react";
import applogo from "./../Assets/app_logo.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
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
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu when clicking a link
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
