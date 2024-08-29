"use client";

import React, { useMemo, useCallback, createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import type { Context, PropsWithChildren } from "react";

const redirect_uri = process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI as string;
if (!redirect_uri) throw new Error("Redirect URI  not found");

export const MyAuth0Context = createContext(null) as Context<IAuth0 | null>;

export default function MyAuth0Provider({ children }: PropsWithChildren) {
  const { loginWithRedirect: auth0Login, logout: auth0Logout } = useAuth0();

  const logout = useCallback(
    () => auth0Logout({ logoutParams: { returnTo: window.location.origin } }),
    [auth0Logout]
  );

  const login = useCallback(
    (connection?: string) =>
      auth0Login({
        authorizationParams: {
          connection: connection,
          redirect_uri: redirect_uri,
        },
      }),
    [auth0Login]
  );

  const auh0 = useMemo(
    () =>
      ({
        login,
        logout,
      }) as IAuth0,
    [login, logout]
  );
  return (
    <MyAuth0Context.Provider value={auh0}>{children}</MyAuth0Context.Provider>
  );
}
