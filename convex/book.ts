import { mutation, query } from "./_generated/server";
import { Id } from "./_generated/dataModel";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

export const getAllBooks = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const results = await ctx.db
      .query("book")
      .order("desc")
      .paginate(args.paginationOpts);
    console.log(results);
    return results;
  },
});

export const getBookById = query({
  args: { bookId: v.id("book") },
  handler: async ({ db }, args) => {
    const book = await db
      .query("book")
      .withIndex("by_id", (q) => q.eq("_id", args.bookId))
      .first();
    if (!book) {
      throw new Error(`Book with ID ${args.bookId} not found`);
    }
    return book;
  },
});

export const createOrGetBook = mutation({
  args: {
    openLibraryId: v.string(),
    title: v.string(),
    author: v.string(),
    coverUrl: v.optional(v.string()),
    description: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existingBook = await ctx.db
      .query("book")
      .withIndex("by_openLibraryId", (q) =>
        q.eq("openLibraryId", args.openLibraryId)
      )
      .first();

    if (existingBook) {
      return existingBook;
    }

    const newBook = {
      openLibraryId: args.openLibraryId,
      title: args.title,
      author: args.author,
      coverUrl: args.coverUrl || null,
      description: args.description || null,
    };
    const insertedBook = await ctx.db.insert("book", newBook);
    return insertedBook;
  },
});
