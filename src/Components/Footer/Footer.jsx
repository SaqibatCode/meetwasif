import React from "react";
import { Link } from "react-router-dom";

const currentTime = new Date()

function Footer() {
  return (
    <>
      <footer className="w-4/5 flex justify-between  m-auto mt-16">
        <h1 className="text-4xl">Wasif Ahmed</h1>

        <div className="flex gap-10">
          <div>
            <h2 className="text-3xl mb-5 uppercase cursor-pointer">Work</h2>
            <h2 className="text-3xl mb-5 uppercase cursor-pointer">Services</h2>
            <h2 className="text-3xl mb-5 uppercase cursor-pointer">About</h2>
            <h2 className="text-3xl mb-5 uppercase cursor-pointer">Journal</h2>
          </div>
          <div>
            <h2 className="text-3xl mb-5 uppercase cursor-pointer">
              <a href="https://instagram.com/codewithwasif" target="_blank">
                instagram
              </a>
            </h2>
            <h2 className="text-3xl mb-5 uppercase cursor-pointer">
              <a href="https://twitter.com/codewithwasif" target="_blank">
                twitter
              </a>
            </h2>
          </div>
        </div>
      </footer>

    <div className="w-4/5 flex justify-between  m-auto mt-16 mb-6">
        <h2 className="text-slate-500">{currentTime.getFullYear()}</h2>
        <div className="flex gap-12">
            <h2 className="text-slate-500"><a href="mailto:hi@meetwasif.co">hi@meetwasif.co</a></h2>
            <h3 className="text-slate-500"><a href="tel:923211303986">0092 321 1303986</a></h3>
        </div>
    </div>

    </>
  );
}

export default Footer;
