'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'convex/react';
import { Star } from 'lucide-react';
import { api } from '../../../../convex/_generated/api';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  useFormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from '@/components/ui/form';

/*
  create a post
    userId: v.id("users"),
    bookId: v.id("book"),
    title: v.string(),
    body: v.string(),
  */


type Post = {
  id: number;
  content: string;
  comments: Comment[];
  user: string;
  timestamp: string;
};

type Comment = {
  id: number;
  content: string;
  rating: number;
  user: string;
  timestamp: string;
};

export default function Forum() {
  const createPost = useMutation(api.post.createPost);
  const { register, handleSubmit } = useForm<IPost
  >();
  const [posts, setPosts] = useState<Post[]>([]);
  const [postContent, setPostContent] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);



  const handlePostSubmit = (data: IPost) => {
    const { body } = data;
    console.log(body);
    // if (postContent.trim()) {
    //   const newPost: Post = {
    //     id: posts.length + 1,
    //     content: postContent,
    //     comments: [],
    //     user: 'John Doe', // Simulate user
    //     timestamp: new Date().toLocaleString(),
    //   };
    //   setPosts([...posts, newPost]);
    //   setPostContent(''); // Clear input field
    // }
  };

  const handleCommentSubmit = (postId: number) => {
    if (commentContent.trim()) {
      const newComment: Comment = {
        id: Math.random(),
        content: commentContent,
        rating: selectedRating,
        user: 'Jane Smith', // Simulate user
        timestamp: new Date().toLocaleString(),
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

  // Initialize react-hook-form
  const form = useForm<IPost>({
    defaultValues: {
      body: ''
    },
  });

  const onSubmit = (data: IPost) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div>
      {/* Post Creation */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-center gap-3">
            {/* Username Field */}
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="What book inspired you? Share it with the community!" {...field} />
                  </FormControl>
                  {/* <FormDescription>share your thougths about a book you've read.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button>
              POST
            </Button>
          </form>
        </Form>
      </div>

      {/* Posts */}
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="mb-6 p-4 bg-white border border-gray-300 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h4 className="font-semibold">{post.user}</h4>
                <p className="text-xs text-gray-500">{post.timestamp}</p>
              </div>
            </div>
            <p className="text-gray-800 mb-4">{post.content}</p>

            {/* Comment Input */}
            <div className="mt-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <textarea
                  value={selectedPostId === post.id ? commentContent : ''}
                  onChange={(e) => setCommentContent(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-grow h-16 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setSelectedPostId(post.id)}
                />
              </div>
              <div className="mt-2 flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
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

            {/* Comments */}
            <div className="mt-6">
              {post.comments.length > 0 && (
                <h4 className="font-semibold mb-2">Comments</h4>
              )}
              {post.comments.map((comment) => (
                <div key={comment.id} className="flex items-start space-x-3 mt-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="flex-grow">
                    <h5 className="font-semibold">{comment.user}</h5>
                    <p className="text-xs text-gray-500 mb-1">{comment.timestamp}</p>
                    <p className="text-gray-600">{comment.content}</p>
                    <div className="flex space-x-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          fill={comment.rating >= star ? 'gold' : 'none'}
                          className={`${comment.rating >= star ? 'text-yellow-400' : 'text-gray-400'}`}
                        />
                      ))}
                    </div>
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
