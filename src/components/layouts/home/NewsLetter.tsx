import { Button } from "@/components/ui/button";

export default function NewsLetter() {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800">
      <div className="container text-white flex items-center justify-between min-h-[200px]">
        <div className="">
          <h6 className="sm:text-2xl text-xl mb-1.5 tracking-wide">
            Subscribe to Our
          </h6>
          <h3 className="sm:text-5xl text-3xl font-bold uppercase tracking-wider">
            Newsletter
          </h3>
        </div>

        <div className=" flex p-1 ">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-100 rounded-[10px] focus-within:bg-white outline-none  text-sm text-gray-800 px-4 py-3"
            />
          </div>
          <button className="ml-[10px] rounded-[10px] bg-blue-600 px-[10px]">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
