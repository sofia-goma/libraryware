"use client";
import { useEffect, useState } from "react";
import Citation from "@/components/shared/citations";
import NewBook from "@/components/shared/new-books";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area"

function Loading() {
    return (
        <div className="mt-20 flex items-center w-full justify-center h-full">
            <div className="border-muted h-20 w-20 animate-spin rounded-full border-8 border-t-primary" />
        </div>
    )
}

function Card({ authorName, title }: { authorName: string; title: string; }) {
    return (
        <div className="bg-primary text-primary-foreground p-5 mb-5">
            {/* author_name */}
            <h1 className="text-xl">{authorName}</h1>
            <p className="text-sm">{title}</p>
        </div>
    )
}
export default function Dashboard() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function loadBook() {
            const resp = await fetch('https://openlibrary.org/search.json?q=science+fiction&limit=10');
            const result = await resp.json();
            // console.log(await result.docs);
            console.log('hello world');
            setBooks(await result.docs);
            for (let i = 0; i < await result.docs.length; i++) {
                console.log(await result.docs[i]);
            }
        }
        loadBook();
    }, []);
    // console.log(books);

    return (
        <>
            <div className="flex gap-[5vw] mb-4">
                <Citation />
                <NewBook />
            </div>
            <div className="flex flex-col">
                <div className="py-3">
                <h1 className="text-lg font-semibold md:text-2xl">Recommended for you</h1>
                <Badge variant='secondary'>science fiction</Badge>
                <Badge variant='secondary'>science fiction</Badge>
                <Badge variant='secondary'>science fiction</Badge>
                <Badge variant='secondary'>science fiction</Badge>

                </div>
                <ScrollArea className="flex w-full gap-4 flex-wrap h-[500px]">
                    {
                        books.length == 0 ? (
                            <Loading />
                        ) : (
                            books.map((book: any, index) => (
                                <Card key={index} authorName={book.author_name} title={book.title} />
                            ))
                        )
                    }
                </ScrollArea>
            </div>
        </>
    );
}