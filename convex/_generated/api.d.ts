/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as auth from "../auth.js";
import type * as book from "../book.js";
import type * as bookmark from "../bookmark.js";
import type * as comment from "../comment.js";
import type * as crons from "../crons.js";
import type * as helpers from "../helpers.js";
import type * as http from "../http.js";
import type * as like from "../like.js";
import type * as notification from "../notification.js";
import type * as post from "../post.js";
import type * as user from "../user.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  book: typeof book;
  bookmark: typeof bookmark;
  comment: typeof comment;
  crons: typeof crons;
  helpers: typeof helpers;
  http: typeof http;
  like: typeof like;
  notification: typeof notification;
  post: typeof post;
  user: typeof user;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
