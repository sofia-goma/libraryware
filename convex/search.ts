import { mutation, query, action } from "./_generated/server";
import { Id } from "./_generated/dataModel";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

// Vector search query function
// export const searchBooks = action({
//   args: {
//     query: v.string(),
//     embedding : v.array(v.float64()),
//   },
//   handler: async (ctx, { query, embedding }) => {
//     const results = await ctx
//       .vectorSearch("book","by_embedding", {
//         vector: embedding ,
//         limit: 16,
//         filter: (q) =>
//           q.or(q.eq("title",query), q.eq("author",query) )

//       });

//     return results;
//   }
// });

export const searchBooks = query({
  args: { searchQuery: v.string() },
  handler: async (ctx, args) => {
    const query = ctx.db
      .query("book")
      .withSearchIndex("search_book", (q) =>
        q.search("title", args.searchQuery)
      );

    const books = await query;

    return books;
  },
});
