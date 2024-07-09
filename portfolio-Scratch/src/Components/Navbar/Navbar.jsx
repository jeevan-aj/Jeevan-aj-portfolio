import { useEffect, useState } from "react";
import Drawerr from "../Drawer";



const Navbar = () => {
  const [active, Setactive] = useState("home");
  const navbardata = [
    { id: 1, name: "home" },
    { id: 2, name: "about" },
    { id: 3, name: "project" },
    { id: 4, name: "contact" },
  ];
  const scrolltosection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && window.innerWidth>800) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${scrolled ? " flex justify-center items-center transition-all duration-300":"h-[50px]  my-5  mx-[30px] lg:mx-auto   flex justify-between items-center lg:mt-5 lg:max-w-[1400px] "}   md:sticky top-0 lg:top-5  z-[99999] navbar   ${
          scrolled ? "bg-slate-100 bg-blur py-2 rounded-full max-w-[500px]  mx-auto transition-all duration-300" : "bg-white"} font-poppins`}
        id="Navbar"
      >
        <div className={`${scrolled ? 'hidden' : 'text-black text-[18px] lg:text-[20px] flex items-center font-bold'} font-poppins`}>Jeevan Joji</div>
      
        <div className={`${scrolled ?"flex justify-center gap-10 transition-all duration-300":"hidden md:flex justify-end gap-8 transition-all duration-300" } flex  pt-4 md:pb-3`}>
          {navbardata.map((item) => (
            <div
              className={`uppercase  cursor-pointer small mx-2 md:mx-0 font-semibold semiBold text-black  ${
                scrolled?" lg:text-[12px] transition-all duration-300 text-[12px]" : "text-[14px] xl:text-[17px] "
              }`}
              key={item.id}
              onClick={() => {
                scrolltosection(item.name);
                Setactive(item.name);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="block md:hidden">
        <Drawerr />
      </div>
      </div>
     
     
    </>
  );
};

export default Navbar;
