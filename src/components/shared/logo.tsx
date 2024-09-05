import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Logo() {
    return (
        <Button variant='outline' className="p-2 max-[770px]:self-start  flex md:p-5 items-center justify-center">
            <Link className="" href="/">
                <p className="text-lg">
                    <span className="mr-1 font-semibold text-lg py-1 px-2 rounded bg-primary text-primary-foreground">
                        L
                    </span>
                    ibraryWave
                </p>
            </Link>
        </Button>
    );
}