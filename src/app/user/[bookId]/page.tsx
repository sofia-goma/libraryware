'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
export default function BookDetails({
    params,
}: {
    params: {
        bookId: string;
    };
}) {
    const [loading, setLoading] = useState(true);
    const [bookDetails, setBookDetails] = useState<any>(null);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isRead, setIsRead] = useState(false);
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState("");
    
    useEffect(() => {
        async function loadBookDetails() {
            try {
                const { data } = await axios.get(`https://openlibrary.org/works/${params.bookId}.json`);
                setBookDetails(data);
            } catch (error) {
                console.error("Error fetching book details:", error);
            } finally {
                setLoading(false);
            }
        }
        loadBookDetails();
    }, [params.bookId]);

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
        // You might want to save this state to local storage or backend
    };

    const handleReadStatus = () => {
        setIsRead(!isRead);
        // Similarly, you might want to update the read status in local storage or backend
    };

    const handleShare = () => {
        // Sharing functionality, e.g., open a share dialog
        const url = window.location.href;
        navigator.share ? navigator.share({ title: bookDetails?.title, url }) : alert("Sharing not supported");
    };

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    return (
        <>
            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <h1 className="text-xl font-bold">{bookDetails?.title}</h1>
                        <p>{bookDetails?.description}</p>
                        <p>Author: {bookDetails?.authors?.map((author: any) => author.name).join(", ")}</p>
                        <p>First Published: {bookDetails?.first_publish_date}</p>

                        <div className="my-4">
                            <button onClick={handleBookmark} className={`btn ${isBookmarked ? "btn-bookmarked" : "btn-not-bookmarked"}`}>
                                {isBookmarked ? "Remove Bookmark" : "Bookmark"}
                            </button>
                            <button onClick={handleReadStatus} className={`btn ${isRead ? "btn-read" : "btn-not-read"}`}>
                                {isRead ? "Mark as Unread" : "Mark as Read"}
                            </button>
                            <button onClick={handleShare} className="btn btn-share">
                                Share
                            </button>
                        </div>

                        <div className="my-4">
                            <h2 className="text-lg font-bold">Comments</h2>
                            <ul>
                                {comments.map((comment, index) => (
                                    <li key={index} className="border-b py-2">{comment}</li>
                                ))}
                            </ul>
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add a comment"
                                className="w-full border p-2 mt-2"
                            />

                            <Button onClick={handleCommentSubmit}>
                            Submit Comment
                            </Button>
                                

                        </div>
                    </>
                )
            }
        </>
    );
}
