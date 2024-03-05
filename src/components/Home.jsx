import { Carousel } from "flowbite-react";
import React from "react";
import hero1 from "../assets/hero.jpg";


const Home = () => {
  return (
    <section className=" bg-neutralSliver  ">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-sreen h-screen ">
        <Carousel
          className="w-full mx-auto "
         
        >
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
              <img src={hero1} className=" rounded-lg w-3xl h-80 " alt="baniere" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutral-900 md:w-3/4 leading-snug ">
                Ensemble avec beaucoup de force
                <span className="text-neutralPrimary leading-snug  ">
                  10 d'expéeiences
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8 ">
                {" "}
                soyons fort jusqu'à la fin{" "}
              </p>

              <button className="btn-primary ">
                S'inscrire{" "}
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
               <img src={hero1} className=" rounded-lg w-3xl h-80 " alt="baniere" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutral-900 md:w-3/4 leading-snug ">
                Ensemble avec beaucoup de force 100%
                <span className="text-neutralPrimary leading-snug  ">
                  10 d'expéeiences
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8 ">
                {" "}
                soyons fort jusqu'à la fin{" "}
              </p>

              <button className="btn-primary ">
                S'inscrire{" "}
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
               <img src={hero1} className=" rounded-lg w-3xl h-80 " alt="baniere" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutral-900 md:w-3/4 leading-snug ">
                Ensemble avec beaucoup de force
                <span className="text-neutralPrimary leading-snug  ">
                  10 d'expéeiences
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8 ">
                {" "}
                soyons fort jusqu'à la fin{" "}
              </p>

              <button className="btn-primary ">
                S'inscrire{" "}
              </button>
            </div>
          </div>
          
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
