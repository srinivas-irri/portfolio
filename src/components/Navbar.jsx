import { useState, useEffect, useRef, } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-scroll";
import "../assets/styles/navbar.css";
import { number } from "framer-motion";
import { logo } from "../assets/images";

function Navbar({ darkMode, setDarkMode }) {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const menuRef = useRef(null);
    

    const navItems = [,
        { name: "Home", to: "hero" },
        { name: "About", to: "about" },
        { name: "Experience", to: "experience" },
        { name: "Projects", to: "projects" },
        { name: "Skills", to: "skills" },
        { name: "Background", to: "background" },
        { name: "Contact", to: "contact" },
    ];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        },
        {
            rootMargin: "-35% 0px -55% 0px",
            threshold: 0,
        }
    );

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            let current = "hero";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                // Section becomes active when its top reaches 300px
                if (rect.top <= 300) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        };

         window.addEventListener("scroll", handleScroll);

         const handleClickOutside = (event) => {
            if (
            open &&
            menuRef.current &&
            !menuRef.current.contains(event.target)
            ) {
            setOpen(false);
            console.log('hi')
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        handleScroll(); // Initial active state

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    


    return (
        <>
           {open && (
                <div className="fixed top-0 left-0 z-9 bg-[rgba(0,_0,_0,_0.7)] w-full h-full overlay"></div>
           )}
            

            <div ref={menuRef} className="fixed top-0 right-0 w-full h-15 z-99 text-white bg-[#000000] border-1 border-[#464646] rounded-sm shadow-[0_18px_30px_rgba(85,_173,_232,_0.22)] min-[1024px]:hidden min-[360px]:block mobile-nav">
                <button className="cursor-pointer p-1 fixed z-9999 right-[12px] top-[20px]" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </button>
                 <div className="w-10 h-17 fixed top-[10px] left-[15px] top-2 logo">
                    <img src={logo} className="w-6 h-9" alt="logo" title="logo" />
                </div>

                {open && (
                    <div className="absolute top-18 right-[10px] bg-[#141b26] border-1 border-[#464646] rounded-[5px] transition-all duration-500 ease-in mobile_menu">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                smooth
                                duration={500}
                                offset={-80}
                                onClick={() => setOpen(prev => !prev)}
                                className={`block cursor-pointer text-sm text-[#fff] border-b-1 border-[#263140] text-left p-3 w-[160px] last:border-b-0 ${activeSection === item.to ? "text-[#61c0ff]!" : ""}`}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <nav className="sticky top-[50%] translate-y-[-50%] dark:bg-slate-900 shadow z-50 min-[1024px]:block min-[360px]:hidden floating-menu-bar">
                <div className="w-12 h-17 inline  logo">
                    <img src={logo} className="w-12 h-17 ml-10" alt="logo" title="logo" />
                </div>

                <div className="p-4 text-left floating-sub-menu">
                    <div className="flex flex-col">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                spy={true}
                                offset={-80}
                                smooth
                                duration={500}
                                activeClass="active-link text-[#fff]"
                                className="cursor-pointer flex items-center gap-4 text-[#8ea0b8] text-[14px] py-2 font-[var(--primary-font)] transition-all duration-300 ease-in hover:text-white hover:transition-all hover:ease-in hover:duration-300">
                                {index} 
                                <span className="w-[20px] h-[2px] bg-[rgba(255,_255,_255,_0.5)] inline transition-all duration-300 ease-in s-bar"></span> 
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* <button
                    onClick={() =>
                        setDarkMode(!darkMode)
                    }
                    className="mr-4"
                >
                    {darkMode ? "☀️" : "🌙"}
                </button> */}
                </div>

                <div className="px-4 social-info">
                    <ul className="flex gap-3 text-gray items-center text-emerald-400">
                        <li><a href="https://www.linkedin.com/feed/" target="_blank">IN</a></li>
                        <li><a href="">@</a></li>
                        <li><a href=""><CiGlobe /></a></li>
                    </ul>
                </div>
            </nav>
            
        </>
    );
}

export default Navbar;