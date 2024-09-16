import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { fileTypes } from "./schema";

export const list = query({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query("collections")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  },
});

export const createCollection = mutation({
  args: {
    userId: v.id("users"),
    collectionId: v.id("_storage"),
    collectionURL: v.string(),
    collectionType: fileTypes,
    name: v.string(),
  },
  handler: async (
    ctx,
    { userId, collectionId, collectionURL, collectionType, name }
  ) => {
    await ctx.db.insert("collections", {
      userId,
      collectionId,
      collectionURL,
      collectionType,
      name,
    });
  },
});

export const moveToTrash = mutation({
  args: {
    userId: v.id("users"),
    collectionId: v.id("_storage"),
  },
  handler: async (ctx, { userId, collectionId }) => {
    const collection = await ctx.db
      .query("collections")
      .filter((q) => q.eq(q.field("collectionId"), collectionId))
      .first();

    if (!collection) {
      throw new Error("Collection not found");
    }
    // Move to trash
    await ctx.db.insert("trash", {
      ...collection,
      deletedAt: Date.now(),
    });

    // Remove from collections
    await ctx.db.delete(collection._id);
  },
});

// restore from trash

export const restoreFromTrash = mutation({
  args: {
    userId: v.id("users"),
    collectionId: v.string(),
  },
  handler: async (ctx, { userId, collectionId }) => {
    const trashItem = await ctx.db
      .query("trash")
      .filter((q) => q.eq(q.field("collectionId"), collectionId))
      .first();

    if (!trashItem) {
      throw new Error("Item not found in trash");
    }

    // Restore the collection
    await ctx.db.insert("collections", {
      ...trashItem,
      //   _creationTime: trashItem.deletedAt,
    });

    // Remove from trash
    await ctx.db.delete(trashItem._id);
  },
});

// delete from trash

export const permanentlyDelete = mutation({
  args: {
    userId: v.id("users"),
    collectionId: v.string(),
  },
  handler: async (ctx, { userId, collectionId }) => {
    const trashItem = await ctx.db
      .query("trash")
      .filter((q) => q.eq(q.field("collectionId"), collectionId))
      .first();

    if (!trashItem) {
      throw new Error("Item not found in trash");
    }

    // Permanently delete
    await ctx.db.delete(trashItem._id);
  },
});
