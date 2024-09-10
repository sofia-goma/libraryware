import { cronJobs } from "convex/server";
import { api } from "./_generated/api";

const crons = cronJobs();

crons.daily(
  "clear read notification",
  { hourUTC: 0, minuteUTC: 0 },
  api.notification.deleteAllReadNotifications
);

export default crons;
