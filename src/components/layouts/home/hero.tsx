import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <div className="container w-full flex flex-col text-center items-center md:gap-4 gap-8">
            <div className="">
                <h3 className="text-slate-900 sm:text-4xl text-3xl font-bold mb-4">Welcome to LIBRARYWAVE</h3>
                <p className="mt-4 text-sm text-gray-600">Discover a world of knowledge and adventure at your fingertips. Our online library offers an extensive collection of books, research materials, and multimedia resources to ignite your curiosity and support your learning journey. Explore our vast catalog, access exclusive content, and enjoy a seamless reading experience anytime, anywhere.</p>
                <Button size='lg' variant='outline'>GET STARTED</Button>
                <button type="button" className="px-5 py-2.5 mt-8 rounded text-sm outline-none tracking-wide bg-blue-600 text-white hover:bg-blue-700">Explore</button>
            </div>
            <div className="md:h-[470px]">
                <img src="https://readymadeui.com/photo.webp" className="w-full h-full md:object-contain" />
            </div>
        </div>
    )
}