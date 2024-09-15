import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export const fileTypes = v.union(
  v.literal("image"),
  v.literal("csv"),
  v.literal("pdf"),
  v.literal("word"),
  v.literal("text")
);

const schema = defineSchema({
  ...authTables,

  book: defineTable({
    openLibraryId: v.string(),
    title: v.string(),
    author: v.string(),
    coverUrl: v.union(v.string(), v.null()),
    description: v.optional(v.union(v.string(), v.null())),
  }).index("by_openLibraryId", ["openLibraryId"]),

  bookmark: defineTable({
    userId: v.id("users"),
    bookId: v.id("book"),
  }).index("by_userId", ["userId", "bookId"]),

  post: defineTable({
    userId: v.id("users"),
    bookId: v.id("book"),
    title: v.string(),
    body: v.string(),
    picture: v.optional(v.string()),
    pictureId: v.optional(v.string()),
  })
    .index("by_bookId", ["bookId"])
    .index("by_userId", ["userId"]),

  comment: defineTable({
    userId: v.id("users"),
    postId: v.id("post"),
    parentId: v.union(v.id("comment"), v.null()),
    body: v.string(),
  })
    .index("by_postId", ["postId"])
    .index("by_parentId", ["parentId"]),

  notification: defineTable({
    message: v.string(),
    isRead: v.boolean(),
    userId: v.id("users"),
  })
    .index("by_isRead", ["isRead"])
    .index("by_userId", ["userId"]),

  like: defineTable({
    userId: v.id("users"),
    postId: v.id("post"),
  }).index("by_userId", ["userId", "postId"]),

  files: defineTable({
    name: v.string(),
    type: fileTypes,
    fileId: v.id("_storage"),
  }).index("by_fileId", ["fileId"]),

  collections: defineTable({
    userId: v.id("users"),
    collectionId: v.id("_storage"),
    collectionURL: v.string(),
    collectionType: fileTypes,
    name: v.string(),
  }).index("by_userId", ["userId"]),

  trash: defineTable({
    userId: v.id("users"),
    collectionId: v.id("_storage"),
    collectionURL: v.string(),
    collectionType: fileTypes,
    name: v.string(),
    deletedAt: v.any(),
  }).index("by_userId", ["userId"]),
});

export default schema;
