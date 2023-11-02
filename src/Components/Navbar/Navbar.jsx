import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import { motion as m } from "framer-motion";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="w-4/5 m-auto flex items-center justify-between py-4">
        <h2 className="text-3xl text-white">
          <Link to="/">Wasif Ahmed</Link>
        </h2>

        <h5
          className="text-white text-lg cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          Menu
        </h5>
      </div>

      <m.div
        className={`w-full bg-black h-full fixed top-0 left-0 ${
          menu ? "block" : "hidden"
        }`}
        initial={{ opacity: menu ? 1 : 0 }}
        animate={{ opacity: menu ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-4/5 m-auto flex items-center justify-between py-3">
          <h2 className="text-3xl text-white">
            <Link to="/">Wasif Ahmed</Link>
          </h2>
          <FaTimesCircle
            className="text-white cursor-pointer text-xl"
            onClick={() => setMenu(false)}
          />
        </div>
        <div className="w-4/5 m-auto flex justify-between items-center h-full">
          <div>
            <h1 className="text-9xl text-white">
              <Link to="/About">ABOUT</Link>
            </h1>
            <h1 className="text-9xl mt-4 text-white">
              <Link to="/Clients">CLIENTS</Link>
            </h1>
            <h1 className="text-9xl mt-4 text-white">
              <Link to="/Projects">PROJECTS</Link>
            </h1>
          </div>
          <div className="flex items-end">
            <h1 className="er outline-4 text-stroke text-[200px] leading-[160px] ">
              CLIE <br />
              NTS
            </h1>
          </div>
        </div>
      </m.div>
    </>
  );
}

export default Navbar;
