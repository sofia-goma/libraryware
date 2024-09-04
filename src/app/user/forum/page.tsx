'use client';
import { useState } from 'react';
import { Star } from 'lucide-react';

type Post = {
  id: number;
  content: string;
  comments: Comment[];
};

type Comment = {
  id: number;
  content: string;
  rating: number;
};

export default function Forum() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postContent, setPostContent] = useState('');

  const [commentContent, setCommentContent] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const handlePostSubmit = () => {
    if (postContent.trim()) {
      const newPost: Post = {
        id: posts.length + 1,
        content: postContent,
        comments: [],
      };
      setPosts([...posts, newPost]);
      setPostContent(''); // Clear input field
    }
  };

  const handleCommentSubmit = (postId: number) => {
    if (commentContent.trim()) {
      const newComment: Comment = {
        id: Math.random(),
        content: commentContent,
        rating: selectedRating,
      };

      setPosts(
        posts.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, newComment] }
            : post
        )
      );
      setCommentContent('');
      setSelectedRating(0);
      setSelectedPostId(null); // Reset state
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Forum</h1>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Share your thoughts on the book:</h3>
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Write your post..."
          className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlePostSubmit}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Create Post
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Posts:</h3>
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 rounded-lg p-4 mb-6 bg-white"
          >
            <p className="text-gray-800">{post.content}</p>

            <div className="mt-4">
              <textarea
                value={selectedPostId === post.id ? commentContent : ''}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="Write a comment..."
                className="w-full h-16 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onFocus={() => setSelectedPostId(post.id)}
              />
              <div className="mt-2 flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={24}
                    onClick={() => setSelectedRating(star)}
                    fill={selectedRating >= star ? 'gold' : 'none'}
                    className={`cursor-pointer ${selectedRating >= star ? 'text-yellow-400' : 'text-gray-400'}`}
                  />
                ))}
              </div>
              <button
                onClick={() => handleCommentSubmit(post.id)}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                disabled={selectedPostId !== post.id}
              >
                Comment
              </button>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Comments:</h4>
              {post.comments.map((comment) => (
                <div key={comment.id} className="mt-4">
                  <p className="text-gray-600">{comment.content}</p>
                  <div className="flex space-x-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={20}
                        fill={comment.rating >= star ? 'gold' : 'none'}
                        className={`${comment.rating >= star ? 'text-yellow-400' : 'text-gray-400'}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
