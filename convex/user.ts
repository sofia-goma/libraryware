import { mutation, query } from "./_generated/server";
import { Id } from "./_generated/dataModel";
import { v } from "convex/values";

export const store = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called storeUser without authentication present");
    }

    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), identity.email))
      .unique();
    if (user !== null) {
      if (user.name !== identity.name) {
        await ctx.db.patch(user._id, { name: identity.name });
      }
      if (user.image !== identity.pictureUrl) {
        await ctx.db.patch(user._id, { image: identity.pictureUrl });
      }
      if (user.phone !== identity.phoneNumber) {
        await ctx.db.patch(user._id, { phone: identity.phoneNumber });
      }
      return user._id;
    }
    return await ctx.db.insert("users", {
      name: identity.name ?? "Anonymous",
      email: identity.email,
      image: identity.pictureUrl,
      phone: identity.phoneNumber,
    });
  },
});

export const checkOrCreateUser = mutation({
  args: {
    user: v.object({
      email: v.string(),
      name: v.optional(v.string()),
      image: v.optional(v.string()),
      phone: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("email", (q) => q.eq("email", args.user.email))
      .first();

    if (existingUser) {
      if (existingUser.name !== args.user.name) {
        await ctx.db.patch(existingUser._id, { name: args.user.name });
      }
      if (existingUser.image !== args.user.image) {
        await ctx.db.patch(existingUser._id, { image: args.user.image });
      }
      if (existingUser.phone !== args.user.phone) {
        await ctx.db.patch(existingUser._id, { phone: args.user.phone });
      }
      return existingUser._id;
    }

    const newUserInfo = {
      email: args.user.email,
      name: args.user.name || "Anonymous",
      image: args.user.image,
      phone: args.user.phone,
    };

    const newUser = await ctx.db.insert("users", newUserInfo);
    return newUser;
  },
});

export const getUser = query({
  args: { userId: v.id("users") },
  handler: async ({ db }, { userId }) => {
    const user = await db
      .query("users")
      .withIndex("by_id", (q) => q.eq("_id", userId))
      .first();
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }
    return user;
  },
});
