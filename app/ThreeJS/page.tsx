import React from "react";
import SplineSceneComponent from "@/components/SplineWorld";

function App() {
  return (
    <section className="container mx-auto flex flex-col text-center lg:text-left">
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row">
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start ">
          <div className="sm:text-3l m-3 w-fit bg-gradient-to-r from-[#00F0FF] via-[#5200FF]  to-[#FF2DF7] bg-clip-text text-5xl font-bold text-transparent">
            With Ai
          </div>
          <div className="m-3 text-4xl font-bold">
            Revolutionize Your Business with Data-Driven Mastery: Transform,
            Automate, Personalize{" "}
          </div>
          <div className="m-3">
            Embark on an Data-Infused Journey to Redefine Your Businesses
            Success
          </div>
          <div className="mx-3 h-[1px] w-full bg-gradient-purple" />
          <div className="flex justify-center lg:justify-start">
            <div
              id="__next"
              className="m-3 w-fit rounded-full bg-gradient-purple px-[0.1rem] py-[0.1rem]"
            ></div>
          </div>
        </div>
        <div className="w-3/6">
          <SplineSceneComponent sceneUrl="https://prod.spline.design/vPUnT6OjZy3MYMsE/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}

export default App;
