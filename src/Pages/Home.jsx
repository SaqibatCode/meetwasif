import React from "react";
import Button from "../Components/Reuseable/Button";
import assetsAndComponents from "../All-Images/index";
import HorizontalBreak from "../Components/Reuseable/HorizontalBreak";

const {
  BackGroundImg,
  textBottomImg,
  Portfolio1,
  smallImg,
  Portfolio2,
  SERVICES,
  Servicessection,
  ExperienceDesign,
} = assetsAndComponents;

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-4/5 flex items-center justify-between m-auto">
        <div>
          <h1 className="text-[6.2rem] leading-tight font-bold  uppercase">
            Wasif Ahmed
          </h1>
          <h1 className="text-[6.2rem] leading-tight font-bold  uppercase text-blue-500">
            Your Developer
          </h1>
          <h1 className="text-[6.2rem] leading-tight font-bold  uppercase text-blue-500">
            OF The Year.
            <img className="mt-[-30px] w-100" src={textBottomImg} alt="" />
          </h1>

          <div className="flex w-3/4 items-center mt-10 justify-between">
            <Button text="Hire Me Now" />
            <div className="w-3/6">
              <p>
                Hi, I am Wasif Ahmed your most wanted creative developer,
                welcome to my personal portfolio.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={BackGroundImg} alt="hero-img" className="w-100" />
        </div>
      </div>

      <HorizontalBreak width={80} />

      {/* About Section */}
      <section className="w-4/5 m-auto mt-10 flex items-center gap-14 mb-16">
        <div className="w-3/5">
          <h5 className="text-4xl text-slate-400">ABOUT</h5>
          <h2 className="text-[5rem] leading-[90px] mt-3">
            Who could be more powerful than a developer who can design.
          </h2>
          <p className="mt-20 font-light w-3/4">
            I am a dedicated Front end developer who loves coding and
            problem-solving. I am very happy when I am doing coding, then I am
            when doing anything else. Then why did I suddenly find the audacity
            to do the unthinkable, learn design? I mean come on we all know
            developers can not learn design. Or can they? And should they?{" "}
          </p>
        </div>
        <div>
          <img src={smallImg} alt="" />
        </div>
      </section>

      <HorizontalBreak width={80} />

      {/* Portfolio Section */}
      <section className="w-4/5 m-auto p-0">
        <div className="flex mt-10">
          <div>
            <h5 className="text-4xl text-slate-400 uppercase">Projects</h5>
          </div>
          <div>
            <img src={textBottomImg} className="absolute right-0" alt="" />
          </div>
        </div>

        <div className="flex justify-between gap-20 w-full mt-20">
          <div>
            <img src={Portfolio1} alt="amazon-clone-portfolio-image" />
            <h1 className="text-5xl mt-5">Amazon Clone</h1>
            <h5 className="text-2xl mt-2 text-slate-400 uppercase">
              ReactJS | Redux
            </h5>
          </div>
          <div>
            <h1 className="text-5xl mt-5">Stream Ease</h1>
            <h5 className="text-2xl mt-2 mb-3 text-slate-400 uppercase">
              ReactJS | Bootstrap
            </h5>
            <img src={Portfolio2} alt="amazon-clone-portfolio-image" />
          </div>
        </div>

        <div className="flex justify-between gap-20 w-full mt-20">
          <div>
            <img src={Portfolio2} alt="amazon-clone-portfolio-image" />
            <h1 className="text-5xl mt-5 text-right">MoneyMKRs</h1>
            <h5 className="text-2xl mt-2 mb-3 text-slate-400 uppercase text-right">
              Elementor | CSS | Javascript
            </h5>
          </div>
          <div>
            <h1 className="text-5xl mt-5">SmartHCM</h1>
            <h5 className="text-2xl mt-2 text-slate-400 uppercase">
              Elementor | CSS | Javascript
            </h5>
            <img
              src={Portfolio1}
              alt="amazon-clone-portfolio-image"
              className="mt-5"
            />
          </div>
        </div>
      </section>

      {/* Services Defined */}
      <section className="mt-20 bg-blue-500 h-fit pb-10 relative">
        <div className="w-4/5 m-auto pt-1">
          <HorizontalBreak width={"100%"} />
          <div className="flex mt-10 justify-between h-[600px]">
            <div>
              <h5 className="text-white text-4xl">Services</h5>
              <img
                src={SERVICES}
                alt="services-image"
                className="mt-10 w-[400px] absolute bottom-[10px] pb-10"
              />
              <img
                src={Servicessection}
                alt="services-section-image-design"
                className="absolute left-0 w-[50%] bottom-[30px]"
              />
            </div>
            <div className="w-3/6 flex items-center">
              <div>
                <p className="w-4/5">
                  Web development tools come as browser add-ons or built-in
                  features in web browsers. Most popular web browsers, such as
                  Google Chrome, Firefox, Internet Explorer, Safari, Microsoft
                  Edge and Opera have built-in tools to help web developers, and
                  many additional add-ons can be found in their respective
                  plugin download centers.
                </p>
                <h2 className="text-7xl mt-10 uppercase">WEB DEVELOPMENT</h2>
                <div className="flex items-center justify-between w-4/5">
                  <h2 className="text-7xl mt-10 uppercase">WEB design</h2>
                  <div className="mt-8">
                    <Button text={"View Projects"} />
                  </div>
                </div>
                <h2 className="text-7xl mt-10 uppercase whitespace-nowrap">
                  Software Development.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="w-4/5 m-auto">
        <HorizontalBreak width={100} />
        <div className="flex">
          <div className="w-4/5">
            <h5 className="text-4xl text-slate-400 mt-5">ABOUT</h5>
          </div>
          <div className="w-4/5 mt-5">
            <p className="text-xl">
              Web development tools come as browser add-ons or built-in features
              in web browsers. Most popular web browsers, such as Google Chrome,
              Firefox, Internet Explorer, Safari, Microsoft Edge and Opera have
              built-in tools to help web developers, and many additional add-ons
              can be found in their respective plugin download centers.
            </p>
            <div className="flex justify-between items-center mt-20 mb-48">
              <div>
                <h2 className="text-6xl">200+</h2>
                <p className="text-slate-500 mt-2">Projects completed</p>
              </div>
              <div>
                <h2 className="text-6xl">20+</h2>
                <p className="text-slate-500 mt-2">Rework customers</p>
              </div>
              <div>
                <h2 className="text-6xl">5+</h2>
                <p className="text-slate-500 mt-2 ">Years experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HorizontalBreak width={80} />

      <section className="w-4/5 m-auto">
        <h2 className="text-9xl mt-10">LET’s BUILD AMAZING</h2>
        <div className="relative flex items-center">
          <h2 className="text-9xl text-blue-500">EXPERIENCES</h2>
          <img
            src={ExperienceDesign}
            alt="experience-top"
            className="absolute left-0 top-[40px]"
          />
        </div>

        <div className="mt-10">
          <Button text={"Hire Me Now"} />
        </div>
      </section>
    </>
  );
}

export default Home;
