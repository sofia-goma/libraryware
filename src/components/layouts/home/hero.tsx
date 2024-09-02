import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <div className="container w-full flex flex-col text-center items-center md:gap-4 gap-8">
            <div className="">
                <h3 className="text-slate-900 sm:text-4xl text-3xl font-bold mb-4">Prompt Delivery and Enjoyable Dining Experience.</h3>
                <p className="mt-4 text-sm text-gray-600">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
                <Button size='lg' variant='outline'>GET STARTED</Button>
                <button type="button" className="px-5 py-2.5 mt-8 rounded text-sm outline-none tracking-wide bg-blue-600 text-white hover:bg-blue-700">Explore</button>
            </div>
            <div className="md:h-[470px]">
                <img src="https://readymadeui.com/photo.webp" className="w-full h-full md:object-contain" />
            </div>
        </div>
    )
}