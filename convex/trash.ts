import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    if (userId === null) {
      throw new Error("Not signed in");
    }
    return await ctx.db
      .query("trash")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  },
});

export const cleanUpTrash = mutation({
  args: {},
  handler: async (ctx) => {
    const now = Date.now();
    const FIFTEEN_DAYS_IN_MS = 15 * 24 * 60 * 60 * 1000;

    // Find items in the trash older than 15 days
    const oldItems = await ctx.db
      .query("trash")
      .filter((q) => q.lt(q.field("deletedAt"), now - FIFTEEN_DAYS_IN_MS))
      .collect();

    // Delete the old items
    for (const item of oldItems) {
      await ctx.db.delete(item._id);
    }
  },
});