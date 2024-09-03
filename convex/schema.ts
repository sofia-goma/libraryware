import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

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
  }),

  post: defineTable({
    userId: v.id("users"),
    bookId: v.id("book"),
    title: v.string(),
    body: v.string(),
  }),

  comment: defineTable({
    userId: v.id("users"),
    postId: v.id("post"),
    parentId: v.union(v.id("comment"), v.null()),
    body: v.string(),
  })
    .index("by_postId", ["postId"])
    .index("by_parentId", ["parentId"]),
});

export default schema;
