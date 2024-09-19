import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Mutation to create a like for a post
export const createLike = mutation({
  args: {
    userId: v.id("users"),
    postId: v.id("post"), // Changed from bookId to postId
  },
  handler: async (ctx, args) => {
    if (args.userId === null) {
      throw new Error("Not signed in");
    }
    const existingLike = await ctx.db
      .query("like")
      .withIndex("by_userId", (q) =>
        q.eq("userId", args.userId).eq("postId", args.postId)
      )
      .first();
    if (existingLike) {
      throw new Error("Like already exists for this user and post");
    }

    const newLike = {
      userId: args.userId,
      postId: args.postId,
    };

    const insertedLike = await ctx.db.insert("like", newLike);
    return insertedLike;
  },
});

// Mutation to delete a like for a post
export const deleteLike = mutation({
  args: {
    likeId: v.id("like"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.likeId);
  },
});

// Query to get a like by its ID
export const getLike = query({
  args: {
    likeId: v.id("like"),
  },
  handler: async (ctx, args) => {
    const like = await ctx.db.get(args.likeId);
    if (!like) {
      throw new Error(`Like with ID ${args.likeId} not found`);
    }
    return like;
  },
});

// Query to get all likes by a user
export const getLikesByUserId = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    if (args.userId === null) {
      throw new Error("Not signed in");
    }
    const likes = await ctx.db
      .query("like")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .collect();

    return likes;
  },
});

// Query to check if a user has liked a specific post
export const isLike = query({
  args: {
    userId: v.id("users"),
    postId: v.id("post"), // Changed from bookId to postId
  },
  handler: async (ctx, args) => {
    if (args.userId === null) {
      throw new Error("Not signed in");
    }
    const like = await ctx.db
      .query("like")
      .withIndex("by_userId", (q) =>
        q.eq("userId", args.userId).eq("postId", args.postId)
      )
      .first();

    return like;
  },
});

// this get all like by post Id

export const getLikeByPostId = query({
  args: {
    postId: v.id('post')
  },
  handler: async (ctx, args) => {
    const likes = await ctx.db
     .query('like')
     .withIndex('by_postId', (q) => q.eq('postId', args.postId))
     .collect()

    return likes.length;
  }
})