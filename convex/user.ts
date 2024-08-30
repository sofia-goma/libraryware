import { mutation, query } from "./_generated/server";
import { Id } from "./_generated/dataModel";
import { v } from "convex/values";

export const checkOrCreateUser = mutation({
  args: {
    user: v.object({
      sub: v.string(),
      email: v.string(),
      name: v.string(),
    }),
  },
  handler: async (ctx, args) => {
    const userId = args.user.sub;
    const existingUser = await ctx.db
      .query("users")
      .withIndex("email", (q) => q.eq("email", args.user.email))
      .first();

    if (existingUser) {
      if (existingUser.name !== args.user.name) {
        await ctx.db.patch(existingUser._id, { name: args.user.name });
      }
      return existingUser;
    }

    const newUserInfo = {
      email: args.user.email,
      name: args.user.name || "Anonymous",
    };

    const newUser = await ctx.db.insert("users", newUserInfo);
    return newUser;
  },
});

export const getUser = mutation({
  args: { userId: v.string() },
  handler: async ({ db }, { userId }) => {
    const user = await db
      .query("users")
      .withIndex("by_id", (q) => q.eq("_id", userId as Id<"users">))
      .first();
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }
    return user;
  },
});
