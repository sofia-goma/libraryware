import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const listTrash = query({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query("trash")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  },
});


export const createCollection = mutation({
  args: {
    userId: v.id("users"),
    storageId: v.id("_storage"),
    collectionURL: v.string(),
    collectionType: v.string(), // You can use predefined types or enums
    name: v.string(),
  },
  handler: async (ctx, { userId, storageId, collectionURL, collectionType, name }) => {
    // Insert the new collection into the "collections" table
    await ctx.db.insert("collections", {
      userId,
      storageId,
      collectionURL,
      collectionType,
      name,
      createdAt: Date.now(), // Automatically add the creation timestamp
    });
  },
});

export const permanentlyDelete = mutation({
  args: {
    userId: v.id("users"),
    collectionId: v.id("collections"),
  },
  handler: async (ctx, { userId, collectionId }) => {
    const trashItem = await ctx.db
      .query("trash")
      .filter((q) => q.eq(q.field("_id"), collectionId))
      .first();

    if (!trashItem) {
      throw new Error("Item not found in trash");
    }

    // Permanently delete the item from trash
    await ctx.db.delete(trashItem._id);
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
