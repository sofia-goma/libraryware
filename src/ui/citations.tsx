import React, { useState, useEffect } from "react";

const citations = [
  {
    text: "La lecture est à l'esprit ce que l'exercice est au corps.",
    author: "Joseph Addison",
  },
  {
    text: "Un livre est un rêve que vous tenez entre vos mains.",
    author: "Neil Gaiman",
  },
  {
    text: "La lecture est une fenêtre ouverte sur le monde et sur soi-même.",
    author: "Pierre Assouline",
  },
  {
    text: "Les livres sont des amis silencieux et toujours fidèles.",
    author: "Proverbe indien",
  },
];

const Citation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % citations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#3c596899] text-xl text-slate-100 p-5 w-[30vw] h-[25vh] rounded-3xl shadow-md">
      <p className="text-center h-16">{citations[currentIndex].text}</p>
      <p className="text-center italic">{`- ${citations[currentIndex].author}`}</p>
      <div className="flex gap-2 justify-end items-end">
        {citations.map((_, index) => (
          <span
            key={index}
            style={{ backgroundColor: "background-color 0.3s" }}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-[#3c5968]" : "bg-[#ccc]"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Citation;
