"use client";
import { useEffect, useState } from "react";
import Citation from "@/components/shared/citations";
import NewBook from "@/components/shared/new-books";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
function Loading() {
    return (
        <div className="mt-20 flex items-center w-full justify-center h-full">
            <div className="border-muted h-20 w-20 animate-spin rounded-full border-8 border-t-primary" />
        </div>
    )
}

function Card({ title, cover }: { authorName?: string; title: string; cover?: string; }) {
    return (
        <div className="">
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
            const resp = await axios.get('http://openlibrary.org/people/davidscotson/lists/OL235275L/seeds.json');
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

                <ScrollArea className="flex w-full gap-4 flex-wrap h-[500px]">
                    {
                        books.length == 0 ? (
                            <Loading />
                        ) : (
                            books.map((book: any, index) => (
                                <Link key={index} href={`/user/${book.url.replace('/works/', '')}`}>
                                    <Card

                                        // authorName={book.author_name}
                                        title={book.title}
                                        cover={book?.picture?.url}
                                    />
                                </Link>
                            ))
                        )
                    }
                </ScrollArea>
            </div>
        </>
    );
}