"use client";
import React, { useState, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import socialDate from "@/lib/social-date";
import getFormattedInitials from "@/lib/get-formatted-initials";
import { Id } from "../../../convex/_generated/dataModel";
import { api } from "../../../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { Dot, MessageCircleReply, Pencil, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "../../providers/auth-provider";
import { toast } from "react-toastify";
import { deleteComment } from "../../../convex/comment";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

interface OpenedReplies {
  [key: string]: {
    open: boolean;
    height: string;
  };
}
const buildCommentTree = (comments: IComment[]): IComment[] => {
  const map: { [key: string]: IComment } = {};
  const roots: IComment[] = [];

  comments.forEach((comment) => {
    map[comment._id] = { ...comment, children: [] };
  });

  comments.forEach((comment) => {
    if (comment.parentId === null) {
      roots.push(map[comment._id]);
    } else {
      map[comment.parentId]?.children?.push(map[comment._id]);
    }
  });

  return roots;
};

function CommentUser({ item }: { item: IComment }) {
  const user = useQuery(api.user.getUser, {
    userId: item.userId as Id<"users">,
  });

  return (
    <div className="flex items-center gap-1">
      <Avatar className="inline-block w-5 h-5 static">
        <AvatarImage src={user?.image || ""} />
        <AvatarFallback>
          {getFormattedInitials(user?.name || "A")}
        </AvatarFallback>
      </Avatar>
      <span className="flex gap-0">
        {user?.name} <Dot /> {socialDate(item._creationTime)}
      </span>
    </div>
  );
}

function Comments({ post }: { post: IPost }) {
  const listRef = useRef<{ [key: string]: HTMLUListElement | null }>({});
  const [openedReplies, setOpenedReplies] = useState<OpenedReplies>({});
  const [activeName, setActiveName] = useState<string>("");
  // To uncomments when posts exists in the database
  const comments = useQuery(api.comment.getCommentsByPost, {
    postId: post._id as Id<"post">,
  });
  const { user } = useAuth();
  //Replace "commentsData" with "comments" in the comments above :)
  const nestedComments = useMemo(
    () => buildCommentTree(comments ?? []),
    [comments]
  );

  const handleToggle = useCallback(
    (id: string) => {
      const rootEl = id.split(".")[0];

      setOpenedReplies((prevState) => ({
        ...prevState,
        [id]: {
          open: !prevState[id]?.open,
          height: prevState[id]?.open
            ? "0px"
            : `${listRef.current[id]?.scrollHeight || 0}px`,
        },
        [rootEl]: {
          open: true,
          height: `${
            (listRef.current[rootEl]?.scrollHeight || 0) +
            (prevState[id]?.open ? 0 : listRef.current[id]?.scrollHeight || 0)
          }px`,
        },
      }));
    },
    [listRef]
  );
  const [editMode, setEditMode] = useState("");
  const deleteCommentConvex = useMutation(api.comment.deleteComment);
  const editCommentConvex = useMutation(api.comment.editComment);
  const generateComments = useCallback(
    (item: IComment, recursive: number = 0) => {
      const isActive = activeName === item._id;
      const classesActive = isActive ? "active" : "";

      const deleteComment = async () => {
        try {
          await deleteCommentConvex({ commentId: item._id as Id<"comment"> });
          toast.success("Delete comment Success");
        } catch {
          toast.error("Error deleting comment");
        }
      };
      const editComment = async () => {
        try {
          await editCommentConvex({
            commentId: item._id as Id<"comment">,
            body: editMode,
          });
          toast.success("Edit Success");
        } catch {
          toast.error("Error editing comment");
        }
      };
      return (
        <li key={item._id}>
          <div
            className={[
              "group m-0 flex flex-col gap-1 rounded-r-lg pr-3 mb-4 focus:outline-none",
              recursive === 0 ? "pl-4" : recursive === 1 ? "pl-11" : "pl-16",
              activeName === item._id || activeName.split(".")[0] === item._id
                ? `text-[#277C78] font-semibold ${
                    item.children?.length ? "bg-white" : "bg-transparent"
                  }`
                : "text-gray-500",
              classesActive,
            ].join(" ")}
          >
            <div className="flex justify-between">
              <div className="flex cursor-text text-secondary-foreground flex-col gap-1">
                <CommentUser item={item} />
                <div className="">{item.body}</div>
              </div>
              {user.id == item.userId && (
                // <div className="flex gap-6">
                //   <Pencil />
                //   <Trash2 onClick={deleteComment} />
                // </div>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="link"
                        className="text-secondary-foreground flex justify-center items-center gap-1"
                      >
                        <Pencil className="w-4 h-4" /> Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit your comment</DialogTitle>
                        <DialogDescription>{item.body}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Textarea
                            defaultValue={item.body}
                            className="col-span-4"
                            onChange={(e) => setEditMode(e.target.value)}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose>
                          <Button type="submit" onClick={editComment}>
                            Save changes
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="link"
                        className="text-destructive flex justify-center items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" /> Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          remove your comment from this post.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="gap-6">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-destructive text-destructive-foreground hover:bg-destructive"
                          onClick={deleteComment}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              )}
            </div>
            {item.children && item.children.length > 0 && (
              <Link
                role="button"
                tabIndex={0}
                href="#"
                id={item._id}
                onClick={() => {
                  if (item.children && item.children.length) {
                    handleToggle(item._id);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.code === "Space" && item.children?.length) {
                    handleToggle(item._id);
                  }
                }}
                className="w-fit hover:underline cursor-pointer"
              >
                <div className="replies-link flex gap-1 items-center">
                  <MessageCircleReply className="w-5 h-5" />
                  {item.children.length} replies
                </div>
              </Link>
            )}
          </div>
          {item.children && item.children.length > 0 && (
            <ul
              ref={(el) => {
                listRef.current[item._id] = el;
              }}
              className="overflow-hidden duration-300 ease-in-out"
              style={{
                maxHeight: `${openedReplies[item._id]?.height || "0px"}`,
              }}
            >
              {item.children.map((childItem) =>
                generateComments(childItem, recursive + 1)
              )}
            </ul>
          )}
        </li>
      );
    },
    [
      activeName,
      openedReplies,
      handleToggle,
      user.id,
      deleteCommentConvex,
      editMode,
      editCommentConvex,
    ]
  );

  return (
    <ul>
      {nestedComments.length > 0
        ? nestedComments.map((comment) => generateComments(comment))
        : "No Comments Available"}
    </ul>
  );
}

export default Comments;
