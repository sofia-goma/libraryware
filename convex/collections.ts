import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { fileTypes } from "./schema";

export const list = query({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    if (userId === null) {
      throw new Error("Not signed in");
    }
    return await ctx.db
      .query("collections")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  },
});

export const createCollection = mutation({
  args: {
    userId: v.id("users"),
    storageId: v.id("_storage"),
    collectionURL: v.string(),
    collectionType: fileTypes,
    name: v.string(),
  },
  handler: async (
    ctx,
    { userId, storageId, collectionURL, collectionType, name }
  ) => {
    if (userId === null) {
      throw new Error("Not signed in");
    }
    await ctx.db.insert("collections", {
      userId,
      storageId,
      collectionURL,
      collectionType,
      name,
    });
  },
});

// move to trash

export const moveToTrash = mutation({
  args: {
    userId: v.id("users"),
    storageId: v.id("_storage"),
    collectionId: v.id("collections")
  },
  handler: async (ctx, { userId, storageId, collectionId }) => {
    if (userId === null) {
      throw new Error("Not signed in");
    }
    const collection = await ctx.db
      .query("collections")
      .filter((q) => q.eq(q.field("storageId"), storageId))
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
    await ctx.db.delete(collectionId)
  },
});



// restore from trash

export const restoreFromTrash = mutation({
  args: {
    userId: v.id("users"),
    storageId: v.id("_storage"), // Use collectionId
  },
  handler: async (ctx, { userId, storageId }) => {
    if (userId === null) {
      throw new Error("Not signed in");
    }
    const trashItem = await ctx.db
      .query("trash")
      .filter((q) => q.eq(q.field("storageId"), storageId))
      .first();

    if (!trashItem) {
      throw new Error("Item not found in trash");
    }

    // Restore the collection with its original _id and update _creationTime
    await ctx.db.insert("collections", {
      ...trashItem,
      // _id: trashItem._id, 
      // _creationTime: trashItem.deletedAt,  // Use the deleted time as the new creation time if desired
    });

    // Remove from trash
    await ctx.db.delete(trashItem._id);
  },
});

// delete from trash

export const permanentlyDelete = mutation({
  args: {
    userId: v.id("users"),
    storageId: v.id("_storage"), // Use collectionId
  },
  handler: async (ctx, { userId, storageId }) => {
    const trashItem = await ctx.db
      .query("trash")
      .filter((q) => q.eq(q.field("storageId"), storageId))
      .first();

    if (!trashItem) {
      throw new Error("Item not found in trash");
    }

    // Permanently delete the item from trash
    await ctx.db.delete(trashItem._id);
  },
});