import { Button } from "@/components/ui/button"

export default function NewsLetter() {
    return (
        <div className="border-y border-gray-200">
        <div className="container flex items-center justify-between min-h-[200px]">
          <div className="">
            <h6 className="sm:text-2xl text-xl mb-1.5 tracking-wide">
              Subscribe to Our
            </h6>
            <h3 className="sm:text-5xl text-3xl font-bold uppercase tracking-wider">
              Newsletter
            </h3>
          </div>

          <div className="bg-gray-100 flex p-1 rounded-full focus-within:bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent text-sm text-gray-800 px-4 py-3"
            />
            <Button>SUBMIT</Button>
            {/* <button
              type="button"
              className="bg-gray-700 hover:bg-gray-800 transition-all text-white font-semibold text-sm rounded-full px-6 py-3"
            >
              Submit
            </button> */}
          </div>
        </div>
      </div>
    )
}