import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { fileTypes } from "./schema";
import { Id } from "./_generated/dataModel";
export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const createFile = mutation({
  args: {
    name: v.string(),
    fileId: v.id("_storage"),
    type: fileTypes,
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("files", {
      name: args.name,
      type: args.type,
      fileId: args.fileId,
    });
    return await ctx.storage.getUrl(args.fileId)
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

// read file
// This function return the id and the url of a given file

export const readFile = query({
  args: {
    fileId: v.id("_storage"),
  },
  async handler(ctx, args) {
    const url = await ctx.storage.getUrl(args.fileId);
    if (!url) {
      throw new Error(`File with ID ${args.fileId} not found`);
    }
    return {
      id: args.fileId,
      url: url,
    };
  },
});
