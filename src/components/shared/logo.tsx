import Link from 'next/link';

export default function Logo() {
    return (
        <div className="border p-2 border-secondary max-[770px]:self-start  flex md:px-5 items-center justify-center md:p-4">
            <Link className="" href="/">
                <p className="text-lg">
                    <span className="mr-1 font-semibold text-lg py-1 px-2 rounded bg-primary text-primary-foreground">
                        L
                    </span>
                    ibraryWave
                </p>
            </Link>
        </div>
    );
}