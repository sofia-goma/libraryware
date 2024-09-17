'use client';
import React, { useState, useEffect } from "react";

const citations: ICitation[] = [
  {
    text: "Reading is to the mind what exercise is to the body.",
    author: "Joseph Addison",
  },
  {
    text: "A book is a dream you hold in your hands.",
    author: "Neil Gaiman",
  },
  {
    text: "Reading is a window open to the world and to oneself.",
    author: "Pierre Assouline",
  },
  {
    text: "Books are silent and always faithful friends.",
    author: "Indian Proverb",
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
    <div className="hidden md:block text-xl border border-border p-4 text-foreground w-[25vw] h-auto">
      <p className="text-center">{citations[currentIndex].text}</p>
      <p className="text-center italic">{`- ${citations[currentIndex].author}`}</p>
      <div className="flex gap-2 justify-end items-end">
        {citations.map((_, index) => (
          <span
            key={index}
            style={{ backgroundColor: "background-color 0.3s" }}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-primary" : "bg-muted-foreground"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Citation;
