// bookmarks.ts

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createBookmark = mutation({
  args: {
    userId: v.id("users"),
    bookId: v.id("book"),
  },
  handler: async (ctx, args) => {
    const existingBookmark = await ctx.db
      .query("bookmark")
      .withIndex("by_userId", (q) =>
        q.eq("userId", args.userId).eq("bookId", args.bookId)
      )
      .first();
    if (existingBookmark) {
      throw new Error("Bookmark already exists for this user and book");
    }

    const newBookmark = {
      userId: args.userId,
      bookId: args.bookId,
    };

    const insertedBookmark = await ctx.db.insert("bookmark", newBookmark);
    return insertedBookmark;
  },
});

export const deleteBookmark = mutation({
  args: {
    bookmarkId: v.id("bookmark"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.bookmarkId);
  },
});

export const getBookmark = query({
  args: {
    bookmarkId: v.id("bookmark"),
  },
  handler: async (ctx, args) => {
    const bookmark = await ctx.db.get(args.bookmarkId);
    if (!bookmark) {
      throw new Error(`Bookmark with ID ${args.bookmarkId} not found`);
    }
    return bookmark;
  },
});

export const getBookmarksByUserId = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const bookmarks = await ctx.db
      .query("bookmark")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .collect();

    return bookmarks;
  },
});

export const isBookmark = query({
  args: {
    userId: v.id("users"),
    bookId: v.id("book"),
  },
  handler: async (ctx, args) => {
    const bookmark = await ctx.db
     .query("bookmark")
     .withIndex("by_userId", (q) =>
        q.eq("userId", args.userId).eq("bookId", args.bookId)
      )
     .first();

    return!!bookmark;
  },
})