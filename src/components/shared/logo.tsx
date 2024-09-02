import Link from 'next/link';

export default function Logo() {
    return (
        <div className="glass-logo border border-gray-200 max-[770px]:self-start  flex px-5 items-center justify-center py-2  p-4 z-20">
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