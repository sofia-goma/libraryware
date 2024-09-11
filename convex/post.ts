import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

export const createPost = mutation({
  args: {
    userId: v.id("users"),
    bookId: v.id("book"),
    title: v.string(),
    body: v.string(),
  },
  handler: async (ctx, args) => {
    const newPost = {
      userId: args.userId,
      bookId: args.bookId,
      title: args.title,
      body: args.body,
    };

    const insertedPost = await ctx.db.insert("post", newPost);
    return insertedPost;
  },
});

export const editPost = mutation({
  args: {
    postId: v.id("post"),
    title: v.optional(v.string()),
    body: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existingPost = await ctx.db.get(args.postId);
    if (!existingPost) {
      throw new Error(`Post with ID ${args.postId} not found`);
    }

    const updates = {
      title: args.title !== undefined ? args.title : existingPost.title,
      body: args.body !== undefined ? args.body : existingPost.body,
    };

    await ctx.db.patch(args.postId, updates);
  },
});

export const deletePost = mutation({
  args: { postId: v.id("post") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.postId);
  },
});

export const getPosts = query({
  handler: async (ctx) => {
    const posts = await ctx.db.query("post").order('desc').collect();
    return posts;
  },
});

export const getPostById = query({
  args: { postId: v.id("post") },
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.postId);
    if (!post) {
      throw new Error(`Post with ID ${args.postId} not found`);
    }
    return post;
  },
});

export const getPostsByBookId = query({
  args: { bookId: v.id("book") },
  handler: async (ctx, args) => {
    const posts = await ctx.db
      .query("post")
      .withIndex("by_bookId", (q) => q.eq("bookId", args.bookId))
      .collect();

    return posts;
  },
});

export const getPostsByUserId = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const posts = await ctx.db
      .query("post")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .collect();

    return posts;
  },
});
