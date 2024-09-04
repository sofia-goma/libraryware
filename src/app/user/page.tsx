"use client";
import { useEffect, useState } from "react";
import Citation from "@/components/shared/citations";
import NewBook from "@/components/shared/new-books";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Loading from '@/components/shared/loading';

function Card({ title, cover, className=' ' }: { authorName?: string; title: string; cover?: string; className: string;}) {
    return (
        <div className={className}>
            {/* author_name */}
            <img src={cover || ""} alt="cover" />
            <p className="text-sm">{title}</p>
        </div>
    )
}
export default function Dashboard() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function loadBook() {
            // this is code is a trial for attempting to load 99 books from open library api
            // http://openlibrary.org/people/george08/lists/OL97L/seeds.json
            // /people/davidscotson/lists/OL235275L
            // const resp = await axios.get('https://openlibrary.org/collections/100-best-mystery-and-thriller-books-of-all-time.json?limit=100&has_fulltext=true');
            const resp = await axios.get('https://openlibrary.org/people/davidscotson/lists/OL235275L/seeds.json');
            const result = await resp.data;
            // const result = await resp.json();
            const allBooks = await result.entries;
            console.log(allBooks);
            // console.log('hello world');
            // console.log(result.docs);
            setBooks(allBooks);
        }
        loadBook();
    }, []);

    return (
        <>
            <div className="flex mb-4">
                <Citation />
                <NewBook />
            </div>
            <div className="flex flex-col">
                <h1 className="text-lg font-semibold md:text-2xl">Recommended for you</h1>

                <ScrollArea className="w-full h-[500px] overflow-y-auto">
    {
        books.length === 0 ? (
            <Loading />
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((book: any, index) => (
                    <Link key={index} href={`/user/${book.url.replace('S', 'L').replace('/works/', '')}`}>
                        <Card
                            title={book.title}
                            cover={book?.picture?.url}
                            className="transition transform hover:scale-105 hover:shadow-lg"
                        />
                    </Link>
                ))}
            </div>
        )
    }
</ScrollArea>

            </div>
        </>
    );
}