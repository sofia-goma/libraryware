import Link from 'next/link';

export default function Logo() {
    return (
        <Link className="text-white" href="/login">
            <p className="text-lg font-light">
                <span className=" mr-1 bg-background font-semibold text-lg py-1 px-2 rounded text-white">
                    L
                </span>
                ibraryWave
            </p>
        </Link>
    )
}