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
      .withIndex("by_id", (q) => q.eq("_id", userId as Id<"users">))
      .first();

    if (existingUser) {
      if (existingUser.name !== args.user.name) {
        await ctx.db.patch(existingUser._id, { name: args.user.name });
      }
      return existingUser;
    }

    const newUserInfo = {
      _id: userId,
      email: args.user.email,
      name: args.user.name || "Anonymous",
    };

    const newUser = await ctx.db.insert("users", newUserInfo);
    return newUser;
  },
});
