import { Id } from "../../convex/_generated/dataModel";

// give the file id of the doc
export default function getFileURL(fileId: Id<"files">): string {
  return `${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${fileId}`;
}
