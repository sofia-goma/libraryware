import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Banner() {
  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export  function BannerHello() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    // <Carousel className="w-full max-w-xs">
    //   <CarouselContent>
    //     {Array.from({ length: 5 }).map((_, index) => (
    //       <CarouselItem key={index}>
    //         <div className="p-1">
    //           <Card>
    //             <CardContent className="flex aspect-square items-center justify-center p-6">
    //               <span className="text-4xl font-semibold">{index + 1}</span>
    //               <div className="bg-gradient-to-r from-white to-blue-white  px-6 py-12 md:py-24">
    //                 <div className="container mx-auto flex flex-col justify-center items-center text-center">
    //                   <h2 className="text-slate-900 sm:text-4xl text-3xl font-bold mb-4">
    //                     Discover Our New Collection
    //                   </h2>
    //                   <p className="text-slate-900 text-base text-center mb-8">
    //                     Elevate your style with our latest arrivals. Shop now
    //                     and enjoy exclusive discounts!
    //                   </p>
    //                   <Button>SHOW MORE</Button>
    //                 </div>
    //               </div>
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>
  );
}
