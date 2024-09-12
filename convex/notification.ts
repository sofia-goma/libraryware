import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createNotification = mutation({
  args: {
    message: v.string(),
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const newNotification = {
      message: args.message,
      isRead: false,
      userId: args.userId,
    };

    const insertedNotification = await ctx.db.insert(
      "notification",
      newNotification
    );
    return insertedNotification;
  },
});

export const getNotification = query({
  args: {
    notiId: v.id("notification"),
  },
  handler: async (ctx, args) => {
    const noti = await ctx.db.get(args.notiId);
    if (!noti) {
      throw new Error(`Notification with ID ${args.notiId} not found`);
    }
    return noti;
  },
});

export const deleteAllReadNotifications = mutation({
  handler: async (ctx) => {
    const readNotifications = await ctx.db
      .query("notification")
      .filter((q) => q.eq(q.field("isRead"), true))
      .collect();

    for (const noti of readNotifications) {
      await ctx.db.delete(noti._id);
    }

    return {
      message: `${readNotifications.length} read notifications deleted successfully`,
    };
  },
});

export const getNotifications = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const notifications = await ctx.db
      .query("notification")
      .filter((q) => q.eq(q.field("isRead"), false))
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .order("desc")
      .take(10);

    return notifications;
  },
});

export const markNotificationAsRead = mutation({
  args: {
    notificationId: v.id("notification"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.notificationId, { isRead: true });
  },
});

export const markAllNotificationAsRead = mutation({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const unReadNotifications = await ctx.db
      .query("notification")
      .filter((q) => q.eq(q.field("isRead"), false))
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .order("desc")
      .collect();

    if (unReadNotifications.length > 0) {
      for (const noti of unReadNotifications) {
        await ctx.db.patch(noti._id, { isRead: true });
      }
    }
  },
});
