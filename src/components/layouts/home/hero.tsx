import { Button } from "@/components/ui/button";
import hero from '../../../../public/hero.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="container w-full flex bg-background my-12 flex-col md:flex-row text-center items-center md:gap-4 gap-8">
            <div className="flex-1 flex gap-6 flex-col">
                <h3 className="text-foreground sm:text-4xl text-3xl font-bold">Welcome to LIBRARYWAVE</h3>
                <p className="text-foreground">Discover a world of knowledge and adventure at your fingertips. Our online library offers an extensive collection of books, research materials, and multimedia resources to ignite your curiosity and support your learning journey. Explore our vast catalog, access exclusive content, and enjoy a seamless reading experience anytime, anywhere.</p>
                <div className="flex gap-4 items-center justify-center">
                    <Link href='/login'>
                        <Button size='lg'>GET STARTED</Button>
                    </Link>
                    <Button size='lg' variant='outline'>Explore</Button>
                </div>
            </div>
            <div className="flex-1 md:h-[470px]">
                <Image src={hero} className="w-full h-full md:object-contain" alt="hero image" />
            </div>
        </div>
    )
}