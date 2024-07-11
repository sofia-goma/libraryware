import Button from "@/ui/button";
import Logo from "@/ui/logo";
import React from "react";

const Skeleton: React.FC = () => {
  return (
    <main className="flex items-center h-[100vh] gap-[8%]">
      <div className="m-[3%]">
        <Logo />
      </div>
      <div className="bg-[#576980] h-auto p-[4%] rounded-[30px] w-[30vw]">
        <div className="flex flex-col items-center text-white gap-2 mb-3">
          <h1 className="text-lg text-[#2D7DC4]">
            Choisisez vos tendances préferés!
          </h1>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center justify-center w-full">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-emerald-50"></div>
          </div>
        </div>
        <div className="text-center pt-5">
          <Button text={"Valider"} active={true} />
        </div>
        <div className=" flex items-center justify-between w-full pt-2"></div>
      </div>
    </main>
  );
};

export default Skeleton;
