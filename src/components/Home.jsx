import { Carousel } from "flowbite-react";
import React from "react";
import hero1 from "../assets/hero.jpg";


const Home = () => {
  return (
    <section id="home" className=" bg-neutralSliver  ">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-sreen h-screen ">
        <Carousel
          className="w-full mx-auto "
         
        >
      
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
            <img alt="logo" width="700" className="rounded-2xl" height="120" src="https://cdn.dribbble.com/userupload/2338354/file/original-ae1855a82a249b8522e6d62be6351828.png?resize=752x" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutral-900 md:w-3/4 leading-snug ">
              Smart links
                <span className="text-neutralPrimary leading-snug  ">
                Lorem Ipsum is so cool and awesome 
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8 ">
              to act and so cool to think. And very awesome to eat and talk.
              </p>

              <button className="btn-primary ">
              get insights → 
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
            <img alt="logo" width="700" className="rounded-2xl" height="120" src="https://cdn.dribbble.com/userupload/2338354/file/original-ae1855a82a249b8522e6d62be6351828.png?resize=752x" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutral-900 md:w-3/4 leading-snug ">
              Smart links 1
                <span className="text-neutralPrimary leading-snug  ">
                Lorem Ipsum is so cool and awesome 
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8 ">
              to act and so cool to think. And very awesome to eat and talk.
              </p>

              <button className="btn-primary ">
              get insights → 
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
            <img alt="logo" width="700" className="rounded-2xl" height="120" src="https://cdn.dribbble.com/userupload/2338354/file/original-ae1855a82a249b8522e6d62be6351828.png?resize=752x" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutral-900 md:w-3/4 leading-snug ">
              Smart links 2
                <span className="text-neutralPrimary leading-snug  ">
                Lorem Ipsum is so cool and awesome 
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8 ">
              to act and so cool to think. And very awesome to eat and talk.
              </p>

              <button className="btn-primary ">
              get insights → 
              </button>
            </div>
          </div>         
          
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
