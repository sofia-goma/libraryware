"use client";

import React, {
  useMemo,
  useCallback,
  createContext,
  useEffect,
  useState,
} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "convex/react";
import type { Context, PropsWithChildren } from "react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { checkOrCreateUser } from "../../convex/user";

export const MyAuth0Context = createContext(null) as Context<IAuth0 | null>;

export default function MyAuth0Provider({ children }: PropsWithChildren) {
  const {
    loginWithRedirect: auth0Login,
    logout: auth0Logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  const logout = useCallback(
    () =>
      auth0Logout({ logoutParams: { returnTo: `${window.location.origin}/` } }),
    [auth0Logout]
  );

  const login = useCallback(
    (connection?: string) =>
      auth0Login({
        authorizationParams: {
          connection: connection,
          redirect_uri: `${window.location.origin}/user`,
        },
      }),
    [auth0Login]
  );

  const auth0 = useMemo(
    () =>
      ({
        login,
        logout,
      }) as IAuth0,
    [login, logout]
  );

  const checkOrCreateUserMutation = useMutation(api.user.checkOrCreateUser);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      return;
    }

    const syncUser = async () => {
      try {
        if (!user.sub || !user.email) {
          throw Error("id or email not define");
        }
        await checkOrCreateUserMutation({
          user: {
            sub: user.sub,
            email: user.email,
            name: user.name || "Anomynous",
          },
        });
      } catch (error) {
        return;
      }
    };

    syncUser();
  }, [isAuthenticated, checkOrCreateUserMutation, user]);

  return (
    <MyAuth0Context.Provider value={auth0}>{children}</MyAuth0Context.Provider>
  );
}
