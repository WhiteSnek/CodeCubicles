import React from "react";
import { categories } from "../../constants";
import { poster } from "../../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CategoryCard = ({ item }) => {
  return (
    <div className="overflow-hidden aspect-square cursor-pointer rounded-sm relative group m-2 h-full">
      <img
        src={item.img}
        className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out"
        alt="img"
      />
      <div className="absolute bg-black/20 blur w-11/12 h-1/4 bottom-1"></div>
      <h1 className="absolute bottom-4 left-4 text-xl font-bold text-white graduate-regular">
        {item.title}
      </h1>
    </div>
  );
};

const Categories = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#heading",
      {
        opacity: 0,
        x: -100,
      },
      {
        x: 0,
        opacity: 1,
      }
    );
  }, []);

  return (
    <div className="h-[60vh] sm:h-[82vh]">  {/* Reduced height */}
      <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
        <div className="col-span-6 p-4 h-3/4 from-[#af9078] to-yellow-50 bg-gradient-to-t sm:bg-gradient-to-l flex flex-col justify-center">
          <h1
            id="heading"
            className="text-black text-5xl text-center font-bold mb-4 rozha-one-regular"
          >
            Categories
          </h1>
          <div className="grid gap-4 grid-cols-4 py-2">
            {categories.map((item, idx) => (
              <CategoryCard item={item} key={idx} />
            ))}
          </div>
        </div>
        <div className="col-span-6 h-3/4">
          <img src={poster} alt="poster" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
