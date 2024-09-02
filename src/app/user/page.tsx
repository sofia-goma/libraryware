"use client";
import Citation from "@/components/shared/citations";
import NewBook from "@/components/shared/new-books";


export default function Dashboard() {
    return (
        <>
            <div className="flex gap-[5vw] mb-4">
                <Citation />
                <NewBook />
            </div>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Recommander pour vous</h1>
            </div>
        </>
    );
}