import React from "react";
import Button from "../Components/Reuseable/Button";
import assetsAndComponents from "../All-Images/index";
import HorizontalBreak from "../Components/Reuseable/HorizontalBreak";

const { BackGroundImg, textBottomImg, Portfolio1, smallImg, Portfolio2 } =
  assetsAndComponents;

function Home() {
  return (
    <>
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
            <Button />
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

      <HorizontalBreak />

      <section className="w-4/5 m-auto mt-10 flex items-center gap-14 mb-16">
        <div className="w-3/5">
          <h5 className="text-4xl text-slate-400">ABOUT</h5>
          <h2 className="text-[5rem] leading-[90px] mt-3">
            Who could be more powerful than a developer who can design.
          </h2>
          <p className="mt-20 font-light w-3/4">
            I am a dedicated Front who loves coding and problem-solving. I am
            very happy when I am creating a Front-End, then I am when doing
            anything else. Then why did I suddenly find the audacity to do the
            unthinkable, learn design? I mean come on we all know developers can
            not learn design. Or can they? And should they?{" "}
          </p>
        </div>
        <div>
          <img src={smallImg} alt="" />
        </div>
      </section>

      <HorizontalBreak />

      <section className="w-4/5 m-auto">
        <div className="flex mt-10">
          <div>
            <h5 className="text-4xl text-slate-400 uppercase">Projects</h5>
          </div>
          <div>
            <img src={textBottomImg} className="absolute right-0" alt="" />
          </div>
        </div>

        <div className="flex justify-between w-full mt-20">
          <div>
            <img src={Portfolio1} alt="amazon-clone-portfolio-image" />
            <h1 className="text-5xl mt-5">Amazon Clone</h1>
            <h5 className="text-2xl mt-2 text-slate-400 uppercase">ReactJS | Redux</h5>
          </div>
          <div>
          <h1 className="text-5xl mt-5">Stream Ease</h1>
            <h5 className="text-2xl mt-2 mb-3 text-slate-400 uppercase">ReactJS | Bootstrap</h5>
            <img src={Portfolio2} alt="amazon-clone-portfolio-image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
