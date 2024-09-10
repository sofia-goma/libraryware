import React, { useState, useRef, useMemo, useCallback } from "react";

import Link from "next/link";
import socialDate from "@/lib/socialDate";
import getFormattedInitials from "@/lib/get-formatted-initials";
import { Id } from "../../../convex/_generated/dataModel";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Dot, MessageCircleReply } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface OpenedReplies {
  [key: string]: {
    open: boolean;
    height: string;
  };
}

const commentsData: IComment[] = [
  {
    _id: "1",
    _creationTime: 1725037774628.4082,
    userId: "jx7443p6h27gzxfeeyvakzr6w56zt2nr",
    postId: "post1",
    parentId: null,
    body: `Explore our vast catalog, access exclusive content, 
    and enjoy a seamless reading experience anytime, anywhere.`,
  },
  {
    _id: "2",
    _creationTime: 1725037774628.4082,
    userId: "jx7443p6h27gzxfeeyvakzr6w56zt2nr",
    postId: "post1",
    parentId: "1",
    body: `Explore our vast catalog, access exclusive content, 
    and enjoy a seamless reading experience anytime, anywhere.`,
  },
  {
    _id: "3",
    _creationTime: 1725037774628.4082,
    userId: "jx7443p6h27gzxfeeyvakzr6w56zt2nr",
    postId: "post1",
    parentId: "1",
    body: `Discover a world of knowledge and adventure at your fingertips. Our online library offers an extensive collection of books, 
    research materials, and multimedia resources to ignite your curiosity and support your learning journey`,
  },
  {
    _id: "4",
    _creationTime: 1725978600000,
    userId: "jx7443p6h27gzxfeeyvakzr6w56zt2nr",
    postId: "post1",
    parentId: "2",
    body: "Child of child comment",
  },
  {
    _id: "5",
    _creationTime: 1725978600000,
    userId: "jx7443p6h27gzxfeeyvakzr6w56zt2nr",
    postId: "post1",
    parentId: null,
    body: "Parents I am a parents yeah cool",
  },
];

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
  // const comments = useQuery(api.comment.getCommentsByPost, {
  //   postId: post._id as Id<"post">,
  // });

  //Replace "commentsData" with "comments" in the comments above :)
  const nestedComments = useMemo(() => buildCommentTree(commentsData), []);

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

  const generateComments = useCallback(
    (item: IComment, recursive: number = 0) => {
      const isActive = activeName === item._id;
      const classesActive = isActive ? "active" : "";

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
            <div className="flex cursor-text text-gray-700 flex-col gap-1">
              <CommentUser item={item} />
              <div className="">{item.body}</div>
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
    [activeName, openedReplies, handleToggle]
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
