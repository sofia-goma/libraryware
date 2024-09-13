import { ConvexError, v } from "convex/values";
import {
  MutationCtx,
  QueryCtx,
  internalMutation,
  mutation,
  query,
} from "./_generated/server";
import { fileTypes } from "./schema";
import { Doc, Id } from "./_generated/dataModel";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const createFile = mutation({
  args: {
    name: v.string(),
    fileId: v.id("_storage"),
    type: fileTypes,
    userId: v.id("users"),
    postId: v.id("post"),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("files", {
      name: args.name,
      type: args.type,
      userId: args.userId,
      fileId: args.fileId,
      postId: args.postId,
    });
  },
});

// delete

export const deleteFile = mutation({
  args: {
    fileId: v.id("files"),
  },
  async handler(ctx, args) {
    await ctx.db.delete(args.fileId);
  },
});
