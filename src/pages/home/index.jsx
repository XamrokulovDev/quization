import { useState } from "react";
import { SlControlPlay } from "react-icons/sl";
import { DiJavascript } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { name: "HTML bo'yicha bilimlaringizni sinab ko'ring!", link: "/html", icon: <FaHtml5 className="text-9xl text-orange-500" /> },
    { name: "CSS bo'yicha bilimlaringizni sinab ko'ring!", link: "/css", icon: <IoLogoCss3 className="text-9xl text-blue-500" /> },
    { name: "JS bo'yicha bilimlaringizni sinab ko'ring!", link: "/js", icon: <DiJavascript className="text-9xl text-amber-400" /> },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="h-[100vh] max-md:w-[100vw] flex items-center justify-center p-5">
      <div className="w-[350px] backdrop-blur-lg bg-[#33333322] pt-5 px-5 pb-10 flex items-center justify-center overflow-hidden rounded-2xl relative"> 
        <button onClick={prevSlide} className="border border-gray-500 rounded-[50%] py-2 pl-1.5 pr-2.5 absolute top-[40%] left-5">
          <SlControlPlay className="text-2xl text-gray-500 rotate-180" />
        </button>
        <div className="flex flex-col items-center">
          {items[currentIndex].icon}
          <p className="text-gray-200 max-md:text-[13px] py-3">{items[currentIndex].name}</p>
        </div>
        <button onClick={nextSlide} className="border border-gray-500 rounded-[50%] py-2 pl-2.5 pr-1.5 absolute top-[40%] right-5">
          <SlControlPlay className="text-2xl text-gray-500"/>
        </button>
        <button className="w-[90%] bg-green-500 absolute bottom-2 left-[50%] translate-x-[-50%] rounded-2xl py-1 px-5">
          <NavLink to={items[currentIndex].link} className=" flex justify-center text-white">Boshlash</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Home;
