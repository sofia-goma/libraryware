import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createComment = mutation({
  args: {
    postId: v.id("post"),
    userId: v.id("users"),
    body: v.string(),
    parentId: v.optional(v.id("comment")),
  },
  handler: async (ctx, args) => {
    const newComment = {
      postId: args.postId,
      userId: args.userId,
      body: args.body,
      parentId: args.parentId || null,
    };

    const insertedComment = await ctx.db.insert("comment", newComment);
    return insertedComment;
  },
});

export const replyComment = mutation({
  args: {
    postId: v.id("post"),
    userId: v.id("users"),
    body: v.string(),
    parentId: v.optional(v.id("comment")),
  },
  handler: async (ctx, args) => {
    const newComment = {
      postId: args.postId,
      userId: args.userId,
      body: args.body,
      parentId: args.parentId || null,
    };

    const insertedComment = await ctx.db.insert("comment", newComment);
    return insertedComment;
  },
});

export const editComment = mutation({
  args: {
    commentId: v.id("comment"),
    body: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.commentId, { body: args.body });
  },
});

export const deleteComment = mutation({
  args: { commentId: v.id("comment") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.commentId);
  },
});

export const getCommentsByPost = query({
  args: { postId: v.id("post") },
  handler: async (ctx, args) => {
    const comments = await ctx.db
      .query("comment")
      .withIndex("by_postId", (q) => q.eq("postId", args.postId))
      .collect();
    return comments;
  },
});

export const getCommentById = query({
  args: { commentId: v.id("comment") },
  handler: async (ctx, args) => {
    const comment = await ctx.db.get(args.commentId);
    if (!comment) {
      throw new Error(`Comment with ID ${args.commentId} not found`);
    }
    return comment;
  },
});

export const getRepliesByCommentId = query({
  args: { commentId: v.id("comment") },
  handler: async (ctx, args) => {
    const replies = await ctx.db
      .query("comment")
      .withIndex("by_parentId", (q) => q.eq("parentId", args.commentId))
      .collect();
    return replies;
  },
});
