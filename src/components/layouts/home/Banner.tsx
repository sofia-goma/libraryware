import Button from "@/components/ui/Button"

export default function Banner() {
  const color = '[#B06AB3]'
    return (
        <div className="bg-gradient-to-r from-white to-blue-white  px-6 py-12 md:py-24">
          <div className="container mx-auto flex flex-col justify-center items-center text-center">
            <h2 className="text-slate-900 sm:text-4xl text-3xl font-bold mb-4">
              Discover Our New Collection
            </h2>
            <p className="text-slate-900 text-base text-center mb-8">
              Elevate your style with our latest arrivals. Shop now and enjoy
              exclusive discounts!
            </p>

            <Button 
              title="show more"
            />
          </div>
        </div>

    )
}